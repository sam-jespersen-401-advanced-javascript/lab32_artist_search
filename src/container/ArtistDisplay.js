import React, { useState, useEffect, useReducer } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import { fetchArtist } from '../services/api-call';
import styles from './ArtistDisplay.css';

const SET_OFFSET = 'SET_OFFSET';
const RESET_OFFSET = 'RESET_OFFSET';
const TOGGLE_PREV = 'TOGGLE_PREV';
const TOGGLE_NEXT = 'TOGGLE_NEXT';


function reducer(state, action) {
  switch(action.type) {
    case SET_OFFSET:
      return handleSetOffset(state, offset => offset + action.payload);
    case RESET_OFFSET:
      return { ...state, offset: 0 };
    case TOGGLE_PREV:
      return { ...state, prevButton: action.payload };
    case TOGGLE_NEXT:
      return { ...state, nextButton: action.payload };
  }
}

const handleSetOffset = (state, fn) => {
  return {
    ...state,
    offset: fn(state.offset)
  };
};

const ArtistDisplay = () => {
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);
  const [formState, dispatch] = useReducer(reducer, { offset: 0, nextButton: false, prevButton: true });


  const artistAPICall = () => {
    fetchArtist(search, formState.offset)
      .then(artists => {
        setCount(artists[0]);
        setArtists(artists[1]);
      });
  };

  useEffect(() => {
    if(search) {
      artistAPICall();
    }
    if(formState.offset + 5 >= count) {
      dispatch({ type: TOGGLE_NEXT, payload: true });
    }

    if(formState.offset === 0) {
      dispatch({ type: TOGGLE_PREV, payload: true });
    }
  }, [formState.offset]);




  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: RESET_OFFSET });
    dispatch({ type: TOGGLE_NEXT, payload: false });
    dispatch({ type: TOGGLE_PREV, payload: true });
    artistAPICall();
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;

    dispatch({ type: SET_OFFSET, payload: num }),
    dispatch({ type: TOGGLE_PREV, payload: false }),
    dispatch({ type: TOGGLE_NEXT, payload: false });
  };


  return (
    <div className={styles.ArtistDisplay}>
      <p>Please search for your favorite musical artists</p>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={search}
      />
      <Artists
        artistArray={artists} />
      <button name="prev" disabled={formState.prevButton} onClick={handleClick}>Previous</button>
      <button name="next" disabled={formState.nextButton} onClick={handleClick}>Next</button>
    </div>
  );

};

export default ArtistDisplay;
