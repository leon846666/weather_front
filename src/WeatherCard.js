import React from 'react';
import { Card, Spin } from 'antd';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <Spin tip="Loading..." />;
  }

  return (
    <Card title={`Weather in ${weatherData.name}`} style={{ width: 300 }}>
      <p>{` ${weatherData.weather[0].main}`}</p>
      <p>{`Temperature: ${weatherData.main.temp}°C`}</p>
      <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
      <p>{`Wind Speed: ${weatherData.wind.speed} m/s`}</p>
    </Card>
  );
};

export default WeatherCard;