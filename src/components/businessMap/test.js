import React, {useEffect, useState, useCallback, useRef} from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'
import '@reach/combobox/styles.css';
import "./../../assets/css/businessMap.css";
import mapStyles from "./mapStyles";
import NavbarComponent from '../dashboard/navbar'
import markerIcon from "./../../assets/img/markerIcon.svg"

let service;
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
    

    const onMapLoad = useCallback(map => {
        if(Object.keys(map).length !== 0){
            search(map)
        } 
    }, []);

    const search = async(map) => {     
        try {
            let request = {
                location: center,
                radius: "1000",
                type: ["stores", "establishment"]
              }  
            service = new window.google.maps.places.PlacesService(map);
            await service.nearbySearch(request, callback);
            function callback(results, status) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                        let place = results[i];                       
                        setMarkers(current => [...current, {
                            lat:place.geometry.location.lat(),
                            lng:place.geometry.location.lng(),
                            name:place.name,
                            formatted_address:place.vicinity,
                            place_id:place.place_id
                        }])  
                    }
                }
            }
        } catch (error) {
            console.log("error!")
        }
    }

    useEffect(() => {     
    }, [isLoaded]);

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
                        onLoad={onMapLoad}
                        mapContainerStyle={mapContainerStyle} 
                        zoom={15} 
                        center={center}
                        options={options}
                        onTilesLoaded
                    >
                        {markers.length > 0 ? 
                            markers.map(marker => 
                                <Marker 
                                    key={marker.place_id}
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
                                    <p><b>ADDRESS:</b>{selected.formatted_address}</p>
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

