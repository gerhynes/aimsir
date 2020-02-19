import React, { Component } from "react"

export default class weatherTile extends Component {
  state = {
    currentWeather: {},
    city: "",
  }
  componentDidMount() {
    this.getWeather()
  }
  getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          currentWeather: data,
        })
      })
      .catch(err => {
        alert(err)
      })
  }
  render() {
    return <div>Weather</div>
  }
}
