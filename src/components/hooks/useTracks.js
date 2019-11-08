import { useState, useEffect } from 'react';
import { fetchTracks } from '../../services/api-call';

const useTracks = ({ id }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetchTracks(id)
      .then(tracks => {
        setTracks(tracks);
      });
  });

  return { tracks };
};

export default useTracks;
