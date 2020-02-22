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
            <h3>{`${Math.round(hour.main.temp)}°C`}</h3>
            <p>{`${hour.weather[0].description} ${Math.round(
              hour.main.temp_max
            )} / ${Math.round(hour.main.temp_min)}°C`}</p>
          </ForecastItem>
        ))}
      </ForecastList>
    </div>
  )
}
