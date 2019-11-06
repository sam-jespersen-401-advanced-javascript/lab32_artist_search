import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

const Releases = ({ releases }) => {
  const mappedReleases = releases.map(release => {
    return <Release
      key={release.id}
      title={release.title}
      date={release.date}
      image={release.image} />;
  });
  return (
    <ul>
      {mappedReleases}
    </ul>
  );
};

Releases.propTypes = {
  releases: PropTypes.array.isRequired
};

export default Releases;
