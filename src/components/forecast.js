import React from "react"

export default function Forecast({ weather }) {
  return (
    <div>
      <h3>Three Day Forecast</h3>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {weather.list.map(hour => (
          <li
            style={{
              listStyle: "none",
              background: "#EDF2F7",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <h3>{hour.dt_txt}</h3>
            <h3>{`${Math.round(hour.main.temp)}°C`}</h3>
            <p>{`${hour.weather[0].description} ${Math.round(
              hour.main.temp_max
            )} / ${Math.round(hour.main.temp_min)}°C`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
