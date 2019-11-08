import React from 'react';
import PropTypes from 'prop-types';
import Tracks from '../components/Tracks';
import useTracks from '../components/hooks/useTracks';

const TrackDisplay = ({ match }) => {
  const { tracks } = useTracks({ id: match.params.id });

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
