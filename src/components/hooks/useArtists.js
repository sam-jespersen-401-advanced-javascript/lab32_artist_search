import { useState, useEffect } from 'react';
import { fetchArtist } from '../../services/api-call';

const useArtists = ({ searchTerm, offset }) => {
  const [artists, setArtists] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(searchTerm) {
      fetchArtist(searchTerm, offset)
        .then(artists => {
          setCount(artists[0]);
          setArtists(artists[1]);
        });
    }
  }, [offset]);



  return { artists, count };
};

export default useArtists;
