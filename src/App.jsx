import React, { Fragment, useState, useCallback } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Main} from './components/Main';
import Login from './components/Sign-in';
import Favorites from './components/Favorites';
import Property from './components/Property';
import Error from './components/Error'
import {offer, city} from './mocks/offer'
import {Coords, mapCoords} from './mocks/Coords'

const AppRoute = {
  ROOT: `/`
};
const App = () => {
  const initialState = 'Paris'
  const [currentcity, setCurrentcity] = useState(initialState)
  const [activeCity, setActiveCity] = useState()


  const toggle = useCallback((e) => {
    setCurrentcity(e.currentTarget.innerText)
    setActiveCity(e.currentTarget.innerText)
  }, [])

  let massChooseCards = []
  offer.forEach((item) => {
    currentcity === item.city ? massChooseCards.push(item) : null
  })

  let massChooseCoords = []
  Coords.forEach(item => {
      massChooseCards.forEach(card => {
        item.id === card.id ? massChooseCoords.push(item) : null
    })
  })

  return(
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            toggle={toggle}
            currentcity={currentcity}
            massChooseCards={massChooseCards}
            massChooseCoords={massChooseCoords}
            activeCity={activeCity}
          />
        </Route>
        <Route path='/login' exact><Login /></Route>
        <Route path='/favorites' exact><Favorites /></Route>
        <Route path='/property/:id' exact>
          <Property
            toggle={toggle}
            currentcity={currentcity}
            massChooseCards={massChooseCards}
            massChooseCoords={massChooseCoords}
          />
        </Route>
        <Route><Error /></Route>
      </Switch>
    </BrowserRouter>
  )
}


export default App

