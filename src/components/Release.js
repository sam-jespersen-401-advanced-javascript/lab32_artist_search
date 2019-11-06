import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ title, date, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} />
      <p>{date}</p>
    </div>
  );
};

Release.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Release;
