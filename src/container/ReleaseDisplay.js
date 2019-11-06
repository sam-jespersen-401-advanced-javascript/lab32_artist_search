import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchReleases } from '../services/api-call';
impo

export default class ReleaseDisplay extends Component {
  state = {
    releases: [],
    offset: 0,
    count: 0
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

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    return (
      <p>hi</p>
    );
  }
}


