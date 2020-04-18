import React,{useEffect, useState} from 'react';
import axios from 'axios';


const Weather = (props) => {
    
    const [data, setData] = useState("");

    useEffect(() => {

    const CORS = 'https://cors-anywhere.herokuapp.com/';
    const darkSky = 'https://api.darksky.net/forecast/0bf7315cb9ae3541719dabc3a5f18e62/';
    const url = `${CORS}${darkSky}${props.cordenadas[0]},${props.cordenadas[1]}`;
    console.log(url);
    axios.get(url)
            .then(response => {
            setData(response.data.currently);
            
            
        });
    },[props.cordenadas]);

    return (

        <div class="Weather">

        <h1>Resumen: </h1>
        <h3>{data.summary}</h3>

        <h1>Temperatura:  </h1>
        <h3>{data.temperature}</h3>  

        <h1>Velocidad del Viento:</h1>
        <h3>{data.windSpeed}</h3>

        <h1>Tipo de Precipitacion:</h1>
        <h3>{data.precipType}</h3>

        <h1>Probabilidad de la Precipitacion:</h1>
        <h2>{data.precipProbability}</h2>

            

    </div>

    );
};

export {Weather as default}