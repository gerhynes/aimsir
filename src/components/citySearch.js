import React, { Component } from "react"
import styled from "styled-components"

const LocationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LocationInput = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  line-height: 1.25;
  font-family: inherit;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 255, 0.5);
  }
`
const FormButton = styled.button`
  background-color: #2c5282;
  color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin: 1rem;
  cursor: pointer;
  font-weight: bold;
  &:focus,
  &:hover {
    background-color: #2a4365;
  }
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
        <label htmlFor="newCity">
          <h3>Choose a Location</h3>
        </label>
        <LocationInput
          type="text"
          placeholder="Nearest City/Town"
          id="newCity"
          name="newCity"
          value={this.state.newCity}
          onChange={this.handleChange}
        />
        <FormButton>Check the Weather</FormButton>
      </LocationForm>
    )
  }
}
