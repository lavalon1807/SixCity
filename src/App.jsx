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
  const [activeCity, setActiveCity] = useState(null)


  const toggle = useCallback((e) => {
    setCurrentcity(e.currentTarget.innerText)
    setActiveCity(currentcity)
  }, [])

  let massChooseCards = []
  offer.forEach((item) => {
    currentcity === item.city ? massChooseCards.push(item) : ''
  })

  let massChooseCoords = []
  Coords.forEach(item => {
      massChooseCards.forEach(card => {
        item.id === card.id ? massChooseCoords.push(item) : ''
    })
  })

  let ttt = []
  for(let i = 0; i < city.length; i++) {
    if (city[i] === currentcity) {
      ttt.push(mapCoords[i])
    }
  }
  const rrr = ttt[0]

  const [yyy, setYyy] = useState(rrr)

  return(
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            toggle={toggle}
            currentcity={currentcity}
            massChooseCards={massChooseCards}
            massChooseCoords={massChooseCoords}
            ttt={ttt}
            yyy={yyy}
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

