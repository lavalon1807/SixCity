import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Main from './components/Main';
import Login from './components/Sign-in';
import Favorites from './components/favorites/Favorites';
import Property from './components/listProperty/Property';
import Error from './components/Error'
import {ActionType} from './components/redux/action'
import {fetchOfferList, fetchFavorites, sendFavorites} from './components/redux/api-create'
import {LoadData} from './components/LoadData'
import PrivateRoute from './components/private-route'

const AppRoute = {
  ROOT: `/`
};

const App = (props) => {

  const {currentCity} = useSelector((state) => state.CITY);
  const {data, isDataLoaded} = useSelector((state) => state.OFFER);
  const {authorizationStatus} = useSelector((state) => state.LOAD_AUTH);

  const [activeCity, setActiveCity] = useState();
  const dispatch = useDispatch();

  if(!isDataLoaded) {
    dispatch(fetchOfferList())
  }

  if(!isDataLoaded) {
    return (
      <LoadData />
    )
  }

  dispatch(fetchFavorites())

  let massChooseCards = []
  data.forEach((item) => {
    currentCity === item.city.name ? massChooseCards.push(item) : null
  })

  const click = (e) => {
    const cityRich = e.currentTarget.innerText
    dispatch({type: ActionType.CHOOSE_CITY, payload: cityRich})
    setActiveCity(e.currentTarget.innerText)
  }

  return(
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            toggle={click}
            currentcity={currentCity}
            massChooseCards={massChooseCards}
            activeCity={activeCity}
          />
        </Route>
        <Route path='/login' exact><Login /></Route>
        <Route path='/property/:id' exact>
          <Property
            massChooseCards={massChooseCards}
          />
        </Route>
        <PrivateRoute path='/favorites' exact component={Favorites}></PrivateRoute>
        <Route path ='/error' exact><Error /></Route>
        <Route><Error /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
