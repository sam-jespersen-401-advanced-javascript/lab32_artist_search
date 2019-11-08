import React from 'react';
import Lyrics from '../components/Lyrics';
import PropTypes from 'prop-types';
import useLyrics from '../components/hooks/useLyrics';

const LyricsDisplay = ({ match }) => {
  const { lyrics } = useLyrics({ name: match.params.name, track: match.params.track });

  return (
    <Lyrics lyrics={lyrics}
      name={match.params.name}
      title={match.params.track} />
  );
};

export default LyricsDisplay;

LyricsDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
