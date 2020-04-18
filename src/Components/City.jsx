import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Weather from './Weather'

const City = (props) => {

    const [cordenadas, setCordenadas] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {

            const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
            const city = `${props.input}.json?access_token=`;
            const mapBoxtoken = 'pk.eyJ1IjoibGZyZXNub2ciLCJhIjoiY2sxYW8wc3o2MGczbTNpcjVoZ2sxbWRnZiJ9.Jdss3fcdT5Nypqn2KMQiFA';
            const url = `${mapBoxURL}${city}${mapBoxtoken}`;
            
            axios.get(url)
                .then(response => {
                    setData(response.data.features);
                    
                });
       
    },[props.input]);

    return (
       
        <div>                
            <div>
                    {data.map(element => {return <span onClick={()=>setCordenadas(element.geometry.coordinates)}>{element.place_name}</span>})}
            </div>
            <div>{cordenadas}</div>
            <div>
                <Weather cordenadas = {cordenadas}/>
            </div>
        
        </div>
    );
};

export {City as default}