import React from "react"
import styled from "styled-components"

const ForecastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ForecastItem = styled.li`
  list-style: none;
  margin: 1rem;
  padding: 1rem;
  background: #edf2f7;
`

export default function Forecast({ weather }) {
  return (
    <div>
      <h3>Three Day Forecast</h3>
      <ForecastList>
        {weather.list.map(hour => (
          <ForecastItem key={hour.dt}>
            <h3>{hour.dt_txt}</h3>
            <img
              src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
              alt={hour.weather[0].description}
            />
            <h3>{`${Math.round(hour.main.temp)}°C`}</h3>
            <p>{`${hour.weather[0].description} ${Math.round(
              hour.main.temp_max
            )} / ${Math.round(hour.main.temp_min)}°C`}</p>
            <p>
              Wind {hour.wind.speed}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon-location-pin"
                  style={{
                    width: "2rem",
                    transform: `rotate(${hour.wind.deg}deg)`,
                  }}
                >
                  <g>
                    <path
                      className="secondary"
                      fill="#A0AEC0"
                      d="M12 1v6a3 3 0 0 0 0 6v9.31a1 1 0 0 1-.7-.29l-5.66-5.66A9 9 0 0 1 12 1z"
                    />
                    <path
                      class="primary"
                      fill="#A0AEC0"
                      d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"
                    />
                  </g>
                </svg>
              </span>
            </p>
          </ForecastItem>
        ))}
      </ForecastList>
    </div>
  )
}
