import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, type, gender, tags }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{gender}</p>
      <p>{tags}</p>

    </>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  gender: PropTypes.string,
  tags: PropTypes.array

};

export default Artist;
