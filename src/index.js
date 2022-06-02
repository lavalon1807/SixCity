import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './components/store/reducer'
import thunk from 'redux-thunk';
import {AuthorizationStatus} from './components/const'
import {fetchOfferList} from './components/store/apiCreate'
import {requireAuthorization} from './components/store/actionCreate'
import {createAPI} from './components/api'

const api = createAPI()

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api))
))

// store.subscribe(()=>console.info(store.getState()))


ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.getElementById(`root`)
);
