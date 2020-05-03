import React from "react";
import API from './api';

export default class PersonList extends React.Component {

  state = {
    id: '',
  }

  handleChange = event => {
    // console.log(`log-id-> ${event.target.value}`);
    this.setState({ id: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const response = await API.delete(`users/${this.state.id}`);
    console.log(response)
    console.log(response.data)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}