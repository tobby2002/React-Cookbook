// Omitted
import API from '../api';
import React from "react";

export default class PersonList extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    API.delete(`users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
}