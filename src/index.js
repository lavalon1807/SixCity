import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './components/redux/root-reducer'
import thunk from 'redux-thunk';
import {userAuth} from './mocks/constants'
import {fetchOfferList, checkAuth} from './components/redux/api-create'
import {requireAuthorization} from './components/redux/user-process/action-user';
import {createAPI} from './components/api'

const api = createAPI(()=>dispatch(
  requireAuthorization(AuthorizationStatus.NO_AUTH)
))

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
))

store.subscribe(()=>console.log(store.getState()))

store.dispatch(checkAuth())

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.getElementById(`root`)
);
