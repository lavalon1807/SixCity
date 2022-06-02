import React from 'react'
import {ActionType} from './action'
import {AuthorizationStatus} from '../const'

const initialState = {
  currentCity: 'Paris',
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  data: {},
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {...state, currentCity: action.payload}

    case ActionType.LOAD_DATA:
      return {...state, data: action.payload}

    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, authorization: action.payload}

    default: return state
  }
}

export default Reducer
