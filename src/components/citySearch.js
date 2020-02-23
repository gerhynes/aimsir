import React, { Component } from "react"
import styled from "styled-components"

const LocationForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default class citySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCity: "",
    }
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.setLocation(this.state.newCity)
    this.setState({
      newCity: "",
    })
  }
  render() {
    return (
      <LocationForm onSubmit={this.handleSubmit} autocomplete="off">
        <label htmlFor="newCity">Choose a Location</label>
        <input
          type="text"
          placeholder="Nearest City/Town"
          id="newCity"
          name="newCity"
          value={this.state.newCity}
          onChange={this.handleChange}
        />
        <button>Check the Weather</button>
      </LocationForm>
    )
  }
}
