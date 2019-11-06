import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistDisplay from '../container/ArtistDisplay';
import Header from './Header.js';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ArtistDisplay} />
        </Switch>
      </Router>
    </>
  );
}
