import React from 'react'
import actionType from './action'

const initialState = {currentCity: 'Paris'}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_CITY':
      return {...state, currentCity: action.payload}

    default: return state
  }
}

export default Reducer
