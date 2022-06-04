import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Main} from './components/Main';
import Login from './components/Sign-in';
import Favorites from './components/Favorites';
import Property from './components/Property';
import Error from './components/Error'
import {offer, city} from './mocks/offer'
import {Coords, mapCoords} from './mocks/Coords'
import {connect, Provider} from 'react-redux'
import {store} from './index'
import {ActionType} from './components/store/action'
import {fetchOfferList} from './components/store/apiCreate'

const AppRoute = {
  ROOT: `/`
};

const App = (props) => {
  const {currentCity} = props

  const [activeCity, setActiveCity] = useState()

  let massChooseCards = []

  offer.forEach((item) => {
    currentCity === item.city ? massChooseCards.push(item) : null
  })

  let massChooseCoords = []
  Coords.forEach(item => {
      massChooseCards.forEach(card => {
        item.id === card.id ? massChooseCoords.push(item) : null
    })
  })

  const click = (e) => {
    const cityRich = e.currentTarget.innerText
    store.dispatch({type: ActionType.CHOOSE_CITY, payload: cityRich})
    setActiveCity(e.currentTarget.innerText)
  }

 // сохраняем все данные в стор
  // store.dispatch(fetchOfferList())

return(
 <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            toggle={click}
            currentcity={currentCity}
            massChooseCards={massChooseCards}
            massChooseCoords={massChooseCoords}
            activeCity={activeCity}
          />
        </Route>
        <Route path='/login' exact><Login /></Route>
        <Route path='/favorites' exact><Favorites /></Route>
        <Route path='/property/:id' exact>
          <Property
            toggle={click}
            currentcity={currentCity}
            massChooseCards={massChooseCards}
            massChooseCoords={massChooseCoords}
          />
        </Route>
        <Route><Error /></Route>
      </Switch>
    </BrowserRouter>
)
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
})


export default connect(mapStateToProps)(App)
