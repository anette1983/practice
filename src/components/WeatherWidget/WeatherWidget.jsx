import React, { useState, useEffect } from 'react';
import '../WeatherWidget/WeatherWidget.css';

// function WeatherWidget(props) {
//   const [weather, setWeather] = useState(null);
//   const apiKey = '419bd34d8daba21c0a4890e35d027d3f';
//   const latitude = props.latitude;
//   const longitude = props.longitude;

//   useEffect(() => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
//       .then(response => response.json())
//       .then(data => setWeather(data))
//       .catch(error => console.error(error));
//   }, [apiKey, latitude, longitude]);

//   return (
//     <div className="weather-widget">
//       {weather && (
//         <>
//           <h2>{weather.name}</h2>
//           <div className="weather-icon">
//             <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
//           </div>
//           <div className="weather-description">{weather.weather[0].description}</div>
//           <div className="temperature">{Math.round(weather.main.temp)}°C</div>
//           <div className="feels-like">Feels like {Math.round(weather.main.feels_like)}°C</div>
//         </>
//       )}
//       {!weather && <div>Loading weather...</div>}
//     </div>
//   );
// }

// export default WeatherWidget;

// import React, { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [position, setPosition] = useState({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setPosition({
          lat: latitude,
          long: longitude,
        });
      },
      err => {
        console.error(err);
        setPosition({
          lat: 37.7749,
          long: -122.4194, // Set default location to San Francisco
        });
      }
    );
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const api_key = '419bd34d8daba21c0a4890e35d027d3f';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.long}&appid=${api_key}`;

      const response = await fetch(url);
      const json = await response.json();
      setWeather(json);
    };

    fetchWeather();
  }, [position]);

  return (
    <div className="weather-widget">
      {weather ? (
        <>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <div className="weather-icon">
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="weather icon"
            />
          </div>
          <div className="weather-description">
            {weather.weather[0].description}
          </div>
          <div className="temperature">
            {Math.round(weather.main.temp - 273.15)}°C
          </div>
          <div className="feels-like">
            Feels like {Math.round(weather.main.feels_like - 273.15)}°C
          </div>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherWidget;

// import React, { useState, useEffect } from "react";

// const WeatherWidget = () => {
//   const [position, setPosition] = useState({
//     lat: 0,
//     long: 0
//   });
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     // Try to get user's current location
//     navigator.geolocation.getCurrentPosition(
//       pos => {
//         setPosition({
//           lat: pos.coords.latitude,
//           long: pos.coords.longitude
//         });
//       },
//       // Handle user's refusal to share location
//       err => {
//         console.error(err);
//         setPosition({
//           lat: 37.7749,
//           long: -122.4194 // Set default location to San Francisco
//         });
//       }
//     );
//   }, []);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       const api_key = process.env.REACT_APP_WEATHER_API_KEY;
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.long}&appid=${api_key}`;

//       const response = await fetch(url);
//       const json = await response.json();
//       setWeather(json);
//     };

//     fetchWeather();
//   }, [position]);

//   return (
//     <div className="weather-widget">
//       {weather ? (
//         <>
//           <h2>{weather.name}</h2>
//           <p>{Math.round(weather.main.temp - 273.15)}°C</p>
//           <p>{weather.weather[0].description}</p>
//         </>
//       ) : (
//         <p>Loading weather...</p>
//       )}
//     </div>
//   );
// };

// export default WeatherWidget;
