import React from "react"
import styled from "styled-components"

const WeatherTile = styled.div`
  background: #edf2f7;
  width: 250px;
  padding: 1rem;
  margin-bottom: 1rem;
`

export default function CurrentWeather({ weather }) {
  return (
    <WeatherTile>
      <h3>{weather.name}</h3>
      <img
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].main}
      />
      <h3>{`${Math.round(weather.main.temp)}°C`}</h3>
      <p>{`${weather.weather[0].main} ${Math.round(
        weather.main.temp_max
      )} / ${Math.round(weather.main.temp_min)}°C`}</p>
    </WeatherTile>
  )
}
