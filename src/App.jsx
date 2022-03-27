import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Sign-in';
import Favorites from './components/Favorites';
import Property from './components/Property';
import Error from './components/Error'

const AppRoute = {
  ROOT: `/`
};

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact><Main day={`night`} price={180} /></Route>
        <Route path='/login' exact><Login /></Route>
        <Route path='/favorites'><Favorites /></Route>
        <Route path='/property/:id'><Property /></Route>
        <Route><Error /></Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
