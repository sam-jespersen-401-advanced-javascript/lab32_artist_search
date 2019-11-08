import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { fetchReleases } from '../services/api-call';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';

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

const ReleaseDisplay = ({ match }) => {
  const [releases, setReleases] = useState([]);
  const [counts, setCounts] = useState(0);
  const [formState, dispatch] = useReducer(reducer, { offset: 0, nextButton: false, prevButton: true });

  const artistAPICall = () => {
    fetchReleases(match.params.id, formState.offset)
      .then(releases => {
        setCounts(releases[0]);
        setReleases(releases[1]);
      });
  };

  useEffect(() => {

    artistAPICall();

    if(counts && formState.offset + 6 >= counts) {
      dispatch({ type: TOGGLE_NEXT, payload: true });
    }
    if(formState.offset === 0) {
      dispatch({ type: TOGGLE_PREV, payload: true });
    }
  }, [formState.offset]);

  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 6 : num = -6;

    dispatch({ type: SET_OFFSET, payload: num }),
    dispatch({ type: TOGGLE_PREV, payload: false }),
    dispatch({ type: TOGGLE_NEXT, payload: false });
  };

  return (
    <div className={styles.ReleaseDisplay}>
      <h2>{match.params.name}</h2>
      <button name="prev" disabled={formState.prevButton} onClick={handleClick}>Previous</button>
      <button name="next" disabled={formState.nextButton} onClick={handleClick}>Next</button>
      <Releases releases={releases} name={match.params.name} />
    </div>

  );
};


ReleaseDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};


export default ReleaseDisplay;



