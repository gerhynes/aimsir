import React, { Component } from "react"

export default class weatherTile extends Component {
  state = {
    currentWeather: {},
    city: "dublin,ie",
    weatherLoaded: false,
  }
  componentDidMount() {
    this.getWeather()
  }
  getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${process.env.GATSBY_OPENWEATHERMAP_API_KEY}&units=metric`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          currentWeather: data,
          weatherLoaded: true,
        })
      })
      .catch(err => {
        alert(err)
      })
  }
  render() {
    const { currentWeather, weatherLoaded } = this.state
    return (
      <div>
        {weatherLoaded && (
          <>
            <h3>{currentWeather.name}</h3>
            <h3>{`${Math.round(currentWeather.main.temp)}°C`}</h3>
            <p>{`${currentWeather.weather[0].main} ${Math.round(
              currentWeather.main.temp_max
            )} / ${Math.round(currentWeather.main.temp_min)}°C`}</p>
          </>
        )}
      </div>
    )
  }
}
