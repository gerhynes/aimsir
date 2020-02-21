import React from "react"

export default function CurrentWeather({ weather }) {
  return (
    <div style={{ background: "#EDF2F7", width: "250px", padding: "1rem" }}>
      <h3>{weather.name}</h3>
      <h3>{`${Math.round(weather.main.temp)}°C`}</h3>
      <p>{`${weather.weather[0].main} ${Math.round(
        weather.main.temp_max
      )} / ${Math.round(weather.main.temp_min)}°C`}</p>
    </div>
  )
}
