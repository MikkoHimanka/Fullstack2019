import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = ({country}) => {
    const [ weather, setWeather ] = useState([]) 
    
    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=b64ba0d815b8668c0784442ac282ac8f&query=${country.name}`)
            .then(response => {setWeather(response.data.current)})
    }, [country.name])
    
    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <b>temperature: </b> {weather.temperature} celsius <br />
            <img src={weather.weather_icons} alt='' /> <br />
            <b>wind: </b> {weather.wind_speed} kph direction {weather.wind_dir}
        </div>
    )
}

export default Weather