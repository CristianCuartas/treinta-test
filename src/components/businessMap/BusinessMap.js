import React, {useEffect, useState} from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'
import '@reach/combobox/styles.css';
import "./../../assets/css/businessMap.css";
import mapStyles from "./mapStyles";
import NavbarComponent from '../dashboard/navbar'
import { getStoresInBogota } from '../../helpers/getStores';
import markerIcon from "./../../assets/img/markerIcon.svg"

const libraries = ["places"]
const mapContainerStyle = {
    width: '97vw',
    height: '100vh'
};
const center = {
    lat: 4.710989,
    lng: -74.072090
}
const options = {
    styles:mapStyles,
    disableDefaultUI:true,
    zoomControl:true
}

const BusinessMap = () => { 
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const search = async() => {        
        try {
            const results = await getStoresInBogota("stores")
            const locations = results.results
            console.log(results)
            for(let location of locations) {        
                setMarkers(current => [...current, {
                    lat:location.geometry.location.lat,
                    lng:location.geometry.location.lng,
                    name:location.name,
                    formatted_address:location.formatted_address
                }])      
            }   
        } catch (error) {
            console.log("error!")
        }
    }

    useEffect(() => {
        if(isLoaded){
            search();
        }
    }, [isLoaded])

    if(loadError) return "Error loading maps"
    if(!isLoaded) return "Loading maps"
 
    return (
        <>        
            <NavbarComponent/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12" >
                    <h1 className="title-businessMap">Business Map <img src={markerIcon} alt="icon-title" style={{ width:'40px', height:'40px' }}/></h1>
                    <GoogleMap 
                        mapContainerStyle={mapContainerStyle} 
                        zoom={12} 
                        center={center}
                        options={options}
                    >
                        {markers.length > 0 ? 
                            markers.map(marker => 
                                <Marker 
                                    position={{lat: marker.lat, lng: marker.lng}}
                                    icon={{
                                        url: markerIcon,
                                        scaledSize: new window.google.maps.Size(30,30),
                                        origin: new window.google.maps.Point(0,0),
                                        anchor: new window.google.maps.Point(15,15),
                                    }}
                                    onClick={()=>{
                                        setSelected(marker)
                                    }}
                                /> 
                            ) : null
                        }
                        {selected ? 
                            (
                            <InfoWindow
                                position={{lat:selected.lat, lng:selected.lng}}
                                onCloseClick={()=>{
                                    setSelected(null)
                                }}
                            >
                                <div>
                                    <h3>{selected.name}</h3>
                                    <p><b>Address:</b>{selected.formatted_address}</p>
                                </div>
                            </InfoWindow>
                            ) 
                            : null}
                    </GoogleMap>
                    </div>
               </div>           
            </div>        
        </>
    )
}
export default BusinessMap
