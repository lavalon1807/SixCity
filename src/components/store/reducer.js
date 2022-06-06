import React from 'react'
import {ActionType} from './action'
import {AuthorizationStatus} from '../const'

const initialState = {
  currentCity: 'Paris',
  data: {},
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {...state, currentCity: action.payload}

    case ActionType.LOAD_DATA:
      return {
        ...state,
        isDataLoaded: true,
        data: action.payload,

      }

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      }

    default: return state
  }
}

export default Reducer
