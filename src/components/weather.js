import React, { Component } from "react"
import CurrentWeather from "./currentWeather"
import Forecast from "./forecast"

export default class Weather extends Component {
  state = {
    currentWeather: {},
    city: "dublin,ie",
    currentWeatherLoaded: false,
    forecastLoaded: false,
  }
  componentDidMount() {
    this.getCurrentWeather()
  }
  getCurrentWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${process.env.GATSBY_OPENWEATHERMAP_API_KEY}&units=metric`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          currentWeather: data,
          currentWeatherLoaded: true,
        })
      })
      .catch(err => {
        alert(err)
      })
  }
  render() {
    const { currentWeather, currentWeatherLoaded } = this.state
    return (
      <div>
        {currentWeatherLoaded && (
          <CurrentWeather weather={currentWeather} />
        )}
      </div>
    )
  }
}
