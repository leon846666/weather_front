import React from 'react';
import { Card } from 'antd';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return ;
  }

  return (
    <Card title={`Weather in ${weatherData.name}`} style={{ width: 300 }}>
      <p>{` ${weatherData.weather[0].main}`}</p>
      <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather icon" />
      <p>{`Temperature: ${weatherData.main.temp}°C`}</p>
      <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
      <p>{`Wind Speed: ${weatherData.wind.speed} m/s`}</p>
    </Card>
  );
};

export default WeatherCard;