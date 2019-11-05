import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistDisplay from '../container/ArtistDisplay';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={ArtistDisplay} />
        </Switch>
      </Router>
    </>
  );
}
