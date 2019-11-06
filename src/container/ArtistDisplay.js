import React, { Component } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import { fetchArtist } from '../services/api-call';
import styles from './ArtistDisplay.css';

export default class ArtistDisplay extends Component {
  state = {
    listOfArtists: [],
    search: '',
    offset: 0,
    count: 0,
    nextButton: false,
    prevButton: true

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ offset: 0, prevButton: true, nextButton: false });
    this.artistAPICall();
  }

  artistAPICall = () => {
    fetchArtist(this.state.search, this.state.offset)
      .then(artists => {
        this.setState({ listOfArtists: artists[1], count: artists[0] });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });

  }

  handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;
    
    this.setState(state => {
      return {
        offset: state.offset + num,
        prevButton: false,
        nextButton: false
      };
    }, () => {

      if(this.state.offset + 5 >= this.state.count) {
        this.setState({ nextButton: true });
      }
      if(target.name === 'prev' && this.state.offset === 0) {
        this.setState({ prevButton: true });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.offset !== this.state.offset) {
      this.artistAPICall();
    }
  }


  render() {
    return (
      <div className={styles.ArtistDisplay}>
        <p>Please search for your favorite musical artists</p>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <Artists
          artistArray={this.state.listOfArtists} />
        <button name="prev" disabled={this.state.prevButton} onClick={this.handleClick}>Previous</button>
        <button name="next" disabled={this.state.nextButton} onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
