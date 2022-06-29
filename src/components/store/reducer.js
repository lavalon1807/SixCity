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
  isCommentLoaded: false,
  massage: '',
  loadComments: '',
  loadUser: {},
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

    case ActionType.SEND_COMMENTS:
      return {
        ...state,
        massage: action.payload,
      }

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        loadComments: action.payload,
        loadUser: action.user,
        isCommentLoaded: true,
      }

    default: return state
  }
}

export default Reducer
