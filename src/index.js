import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducer} from './components/reducer'

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById(`root`)
);
