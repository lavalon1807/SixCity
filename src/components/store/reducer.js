import React from 'react'
import {ActionType} from './action'
import {AuthorizationStatus} from '../const'

const initialState = {
  currentCity: 'Paris',
  city: {},
  data: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: null,
  isDataLoaded: false,
  massage: {},
  loadComments: {},
  isLoaded: false,
  objFavorite: [],
  oneOffer: {},
  sentence: [],
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {...state, currentCity: action.payload}

    case ActionType.LOAD_DATA:
      return {
        ...state,
        city: action.payloadCity,
        data: action.payloadData,
        isDataLoaded: true,
      }

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        login: action.payloadLogin,
      }

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        loadComments: {
          ...state.commentsMap,
          [action.meta]: action.payload,
        },
      }

      case ActionType.ADD_FAVORITES:
        return {
          ...state,
          objFavorite: action.payload,
        }

      case ActionType.LOAD_OFFER:
        return {
          ...state,
          oneOffer: action.payload,
          isLoaded: true,
        }

      case ActionType.LOAD_NEARBY:
        return {
          ...state,
          sentence: action.payload,
        }

    default: return state
  }
}

export default Reducer
