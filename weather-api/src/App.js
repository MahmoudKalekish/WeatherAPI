import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import clear from "./weather-icons/clear.svg";
// import cloudy from "./weather-icons/cloudy.svg";
import drizzle from "./weather-icons/drizzle.svg";
import fog from "./weather-icons/fog.svg";
import mostlycloudy from "./weather-icons/mostlycloudy.svg";
import partlycloudy from "./weather-icons/partlycloudy.svg";
import rain from "./weather-icons/rain.svg";
import snow from "./weather-icons/snow.svg";
import storm from "./weather-icons/storm.svg";
// import unknown from "./weather-icons/unknown.svg";
import "./App.css";


const App = () => {
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [city, setCity] = useState("London");
const [Weather, setWeather] = useState(null);


useEffect(() => {
  console.log("It's working");
  const fetchData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=28aaae0bafba086e2e135f8514790dc2`;
  try {
  const res = await fetch(url);
  const result = await res.json();
  setWeather(result);
  setIsLoaded(true);
  } catch (error) {
  setIsLoaded(true);
  setError(error);
  }
  };
  fetchData();
  }, [city]);


const handleClick = (e) => {
console.log("the e on click is here: ", e);
setCity(e);
};



function hoursArray(Weather) {
let hours = [];
for (let i = 1; i <= 7; i++) {
hours.push(Weather.list[i].dt_txt.slice(11, 16));
}
return hours;
}

function tempArray(Weather) {
let temp = [];
for (let i = 1; i <= 7; i++) {
temp.push((Weather.list[i].main.temp).toFixed());
}
return temp;
}

function iconsArray(Weather) {
let icon = [];
for (let i = 1; i <= 7; i++) {
icon.push((Weather.list[i].weather[0].id));
}
return icon;
}

function mainIconChoosing(Weather) {
if (Weather < 300) {
return storm;
} else if (Weather >= 300 && Weather < 499) {
return drizzle;
} else if (Weather >= 500 && Weather < 599) {
return rain;
} else if (Weather >= 600 && Weather < 699) {
return snow;
} else if (Weather >= 700 && Weather < 799) {
return fog;
} else if (Weather === 800) {
return clear;
} else if (Weather === 801) {
return partlycloudy;
} else if (Weather > 801 && Weather <= 805) {
return mostlycloudy;
} else {
return undefined;
}
}

if (error) {
return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
return <div>Loading...</div>;
} else {
  return (
    <div className="app">
    <Search click={handleClick} city={city} />
    {console.log(Weather.list[0].weather[0].id)}
    {console.log(iconsArray(Weather))}
    <CurrentWeather
         currentWeatherDesc={Weather.list[0].weather[0].description}
         tempMin={(Weather.list[0].main.temp_min).toFixed()}
         tempMax={(Weather.list[0].main.temp_max).toFixed()}
         humidity={Weather.list[0].main.humidity}
         pressure={Weather.list[0].main.pressure}
         mainIcon={mainIconChoosing(Weather.list[0].weather[0].id)}
       />
    <HourlyWeather
         hourlyArray={hoursArray(Weather)}
         tempArray={tempArray(Weather)}
         iconsArray={iconsArray(Weather)}
       />


    </div>
    );
    };
  }
    export default App;