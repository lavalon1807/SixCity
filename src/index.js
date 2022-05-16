import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

ReactDOM.render(
  <App />,
  document.getElementById(`root`)
);
