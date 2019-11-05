import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const Artists = ({ artistArray }) => {
  
  const artists = artistArray.map(artist => {
    return <Artist
      key={artist.id}
      name={artist.name}
      type={artist.type}
      gender={artist.gender}
      tags={artist.tags}
    />;
  });

  return (
    <ul>
      {artists}
    </ul>
  );
};

Artists.propTypes = {
  artistArray: PropTypes.array.isRequired
};

export default Artists;
