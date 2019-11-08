import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchTracks } from '../services/api-call';
import Tracks from '../components/Tracks';

const TrackDisplay = ({ match }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTracks(match.params.id)
      .then(res => {
        setTracks(res);
      });
  });

  return (
    <div>
      <Tracks songs={tracks} name={match.params.name} />
    </div>
  );

};

export default TrackDisplay;

TrackDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
