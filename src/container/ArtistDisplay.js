import React, { Component } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import { fetchArtist } from '../services/api-call';

export default class ArtistDisplay extends Component {
  state = {
    listOfArtists: [],
    search: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetchArtist(this.state.search)
      .then(artists => {
        console.log(artists);
        this.setState({ listOfArtists: artists });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });

  }

  render() {
    return (
      <>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <Artists
          artistArray={this.state.listOfArtists} />
      </>
    );
  }
}
