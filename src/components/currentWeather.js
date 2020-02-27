import React from "react"
import styled from "styled-components"
import { format, fromUnixTime } from "date-fns"
import WeatherIcon from "./weatherIcon"

const WeatherTile = styled.div`
  background: #2c5282;
  width: 250px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

const WindForecast = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 0.5rem;
  }
`

export default function CurrentWeather({ weather }) {
  return (
    <WeatherTile>
      <h3>{`${weather.name} ${format(fromUnixTime(weather.dt), "ha")}`}</h3>
      <WeatherIcon
        iconCode={weather.weather[0].icon}
        weatherDesc={weather.weather[0].main}
      />
      {/* <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].main}
      /> */}
      <h3>{`${Math.round(weather.main.temp)}°C`}</h3>
      <p>{`${weather.weather[0].description} ${Math.round(
        weather.main.temp_max
      )} / ${Math.round(weather.main.temp_min)}°C`}</p>
      <WindForecast>
        <span>Wind {weather.wind.speed}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="icon-location-pin"
          style={{
            width: "2rem",
            transform: `rotate(${weather.wind.deg}deg)`,
          }}
        >
          <g>
            <path
              className="secondary"
              fill="#A0AEC0"
              d="M12 1v6a3 3 0 0 0 0 6v9.31a1 1 0 0 1-.7-.29l-5.66-5.66A9 9 0 0 1 12 1z"
            />
            <path
              className="primary"
              fill="#A0AEC0"
              d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"
            />
          </g>
        </svg>
      </WindForecast>
    </WeatherTile>
  )
}
