import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Sign-in';
import Favorites from './components/Favorites';
import Property from './components/listProperty/Property';
import Error from './components/Error'
import {city} from './mocks/offer'
import {connect, Provider} from 'react-redux'
import {store} from './index'
import {ActionType} from './components/store/action'
import {fetchOfferList} from './components/store/apiCreate'
import PropTypes from 'prop-types'
import {LoadData} from './components/LoadData'

const AppRoute = {
  ROOT: `/`
};

const App = (props) => {
  const {currentCity, data, isDataLoaded, loadData} = props
  const [activeCity, setActiveCity] = useState()

  useEffect(() => {
    if(!isDataLoaded) {
      loadData()
    }
  },[isDataLoaded])

  if(!isDataLoaded) {
    return (
      <LoadData />
    )
  }

  let massChooseCards = []
  data.forEach((item) => {
    currentCity === item.city.name ? massChooseCards.push(item) : null
  })

  const click = (e) => {
    const cityRich = e.currentTarget.innerText
    store.dispatch({type: ActionType.CHOOSE_CITY, payload: cityRich})
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
        <Route path='/favorites' exact><Favorites /></Route>
        <Route path='/property/:id' exact>
          <Property
            toggle={click}
            currentcity={currentCity}
            massChooseCards={massChooseCards}
          />
        </Route>
        <Route><Error /></Route>
      </Switch>
    </BrowserRouter>
)
}

App.propTypes = {
  currentCity: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  data: state.data,
  isDataLoaded: state.isDataLoaded,
  loadData: state.loadData,
})

const mapDispatchToProps = (dispatch) => ({
  loadData() {
    dispatch(fetchOfferList())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
