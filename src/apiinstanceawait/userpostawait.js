import React from 'react';
import API from './api';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    console.log(`log-id-> ${event.target.value}`);
    this.setState({ name: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    const response = await API.post(`https://jsonplaceholder.typicode.com/users`, { user });
    // console.log(response)
    console.log(response.data)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}