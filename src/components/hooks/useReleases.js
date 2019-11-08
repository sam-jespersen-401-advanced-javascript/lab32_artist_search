import { useState, useEffect } from 'react';
import { fetchReleases } from '../../services/api-call';

const useReleases = ({ id, offset }) => {
  const [releases, setReleases] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchReleases(id, offset)
      .then(releases => {
        setCount(releases[0]);
        setReleases(releases[1]);
      });
  }, [offset]);



  return { releases, count };
};

export default useReleases;
