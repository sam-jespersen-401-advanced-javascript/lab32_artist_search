import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistDisplay from '../container/ArtistDisplay';
import Header from './Header.js';
import './App.css';
import ReleaseDisplay from '../container/ReleaseDisplay';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/artists/:id" component={ReleaseDisplay} />
          <Route exact path="/" component={ArtistDisplay} />
        </Switch>
      </Router>
    </>
  );
}
