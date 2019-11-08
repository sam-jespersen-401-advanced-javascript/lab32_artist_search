import { useState, useEffect } from 'react';
import { fetchLyrics } from '../../services/api-call';

const useLyrics = ({ name, track }) => {
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    fetchLyrics(name, track)
      .then(lyrics => {
        setLyrics(lyrics);
      });
  });

  return { lyrics };
};

export default useLyrics;
