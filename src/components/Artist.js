import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const Artist = ({ name, type, gender }) => {
  return (
    <div className={styles.Artist}>
      <h3>{name}</h3>
      <p>Type of Act: {type}</p>
      <p>Gender: {gender}</p>

    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  gender: PropTypes.string,
  tags: PropTypes.string

};

export default Artist;
