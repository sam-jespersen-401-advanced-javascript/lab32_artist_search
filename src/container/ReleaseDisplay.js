import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchReleases } from '../services/api-call';
import Releases from '../components/Releases';

export default class ReleaseDisplay extends Component {
  state = {
    releases: [],
    offset: 0,
    count: 0,
    nextButton: false,
    prevButton: true
  }

  componentDidMount() {
    this.getReleases();
  }

  getReleases = () => {
    fetchReleases(this.props.match.params.id, this.state.offset)
      .then(releases => {
        this.setState({ releases: releases[1], count: releases[0] });
      });
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

      if (this.state.offset + 5 >= this.state.count) {
        this.setState({ nextButton: true });
      }
      if (target.name === 'prev' && this.state.offset === 0) {
        this.setState({ prevButton: true });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.offset !== this.state.offset) {
      this.getReleases();
    }
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    return (
      <div>
        <Releases releases={this.state.releases} />
        <button name="prev" disabled={this.state.prevButton} onClick={this.handleClick}>Previous</button>
        <button name="next" disabled={this.state.nextButton} onClick={this.handleClick}>Next</button>
      </div>

    );
  }
}


