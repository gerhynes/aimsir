import React from "react"
import CloudyDay from "../images/cloudy-day.svg"
import CloudyNight from "../images/cloudy-night.svg"
import BrokenClouds from "../images/broken-clouds.svg"
import ClearDay from "../images/clear-day.svg"
import ClearNight from "../images/clear-night.svg"
import Cloud from "../images/cloud.svg"
import Fog from "../images/fog.svg"
import Rain from "../images/rain.svg"
import ShowerRain from "../images/shower-rain.svg"
import Snow from "../images/snow.svg"
import Thunderstorm from "../images/thunderstorm.svg"

export default function weatherIcon({ iconCode, weatherDesc }) {
  let icon
  switch (iconCode) {
    case "01d":
      icon = ClearDay
      break
    case "01n":
      icon = ClearNight
      break
    case "02d":
      icon = CloudyDay
      break
    case "02n":
      icon = CloudyNight
      break
    case "03d":
      icon = Cloud
      break
    case "03n":
      icon = Cloud
      break
    case "04d":
      icon = BrokenClouds
      break
    case "04n":
      icon = BrokenClouds
      break
    case "09d":
      icon = ShowerRain
      break
    case "09n":
      icon = ShowerRain
      break
    case "10d":
      icon = Rain
      break
    case "10n":
      icon = Rain
      break
    case "11d":
      icon = Thunderstorm
      break
    case "11n":
      icon = Thunderstorm
      break
    case "13d":
      icon = Snow
      break
    case "13n":
      icon = Snow
      break
    case "50d":
      icon = Fog
      break
    case "50n":
      icon = Fog
      break
    default:
      icon = Cloud
  }
  return (
    <div>
      <img src={icon} alt={weatherDesc} style={{ height: "3.5rem" }} />
    </div>
  )
}
