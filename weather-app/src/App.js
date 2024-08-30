import './App.css';
import Search from "./components/search/search";
import CurrentWeather from './components/current-weather/current-weather';
import {WEATHER_API_KEY, WEATHER_API_URL, } from './api';
import { useState } from 'react';

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
        const [lat, lon] = searchData.value.split(" ");
        
        const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    
        Promise.all([CurrentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json(); 
                const forecastResponse = await response[1].json(); 
                setCurrentWeather({city: searchData.label , ...weatherResponse});
                setForecast({city: searchData.label, ...forecastResponse});
            })
            .catch((err) => console.log(err));
    }

    return(<div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        {CurrentWeather && <CurrentWeather data={currentWeather}/>}
        </div>);
}

export default App;