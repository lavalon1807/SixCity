import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './components/store/reducer'
import thunk from 'redux-thunk';
import {AuthorizationStatus} from './components/const'
import {fetchOfferList, checkAuth} from './components/store/apiCreate'
import {requireAuthorization} from './components/store/actionCreate'
import {createAPI} from './components/api'

const api = createAPI(()=>dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api))
))

// store.subscribe(()=>console.log(store.getState()))

store.dispatch(checkAuth())

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.getElementById(`root`)
);
