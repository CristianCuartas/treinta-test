import axios from "axios";
import { GET_STORES_PLACES_API } from "./../services/EndPoints";

export const getStoresInBogota = async (value) => {
    const apikey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const query = value;    
    const url = `${GET_STORES_PLACES_API}${query}&key=${apikey}`
    try {
        const response = await axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        })
        const {data} = response;
        return data;
    } catch (error) {
        let status;
        if (error.response) {
            console.log('Ocurrio un problema | Error response.')
            status = error.response.status
        }
        if (error.request) {
            console.log('Ocurrio un problema | Error request.')
            status = error.request.status
        } else {
            console.log('Ocurrio un problema | Error.')
            console.log(error)
        }
        return status
    }


}