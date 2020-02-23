import React, { Component } from "react"
import styled from "styled-components"
import CitySearch from "./citySearch"
import CurrentWeather from "./currentWeather"
import Forecast from "./forecast"

const WeatherHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export default class Weather extends Component {
  state = {
    city: "dublin,ie",
    currentWeather: {},
    currentWeatherLoaded: false,
    forecast: {},
    forecastLoaded: false,
  }
  setLocation = newCity => {
    this.setState(
      {
        city: newCity,
      },
      () => {
        this.getCurrentWeather()
        this.getForecast()
      }
    )
  }
  componentDidMount() {
    this.getCurrentWeather()
    this.getForecast()
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
        console.log(err)
      })
  }
  getForecast() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${process.env.GATSBY_OPENWEATHERMAP_API_KEY}&units=metric`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          forecast: data,
          forecastLoaded: true,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const {
      currentWeather,
      currentWeatherLoaded,
      forecast,
      forecastLoaded,
    } = this.state
    return (
      <div>
        <WeatherHeader>
          <CitySearch setLocation={this.setLocation} />
          <div>
            <h3>Current Weather</h3>
            {currentWeatherLoaded && (
              <CurrentWeather weather={currentWeather} />
            )}
          </div>
        </WeatherHeader>
        {forecastLoaded && <Forecast weather={forecast} />}
      </div>
    )
  }
}
