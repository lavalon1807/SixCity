import {ActionType} from './action'

export const loadOffer = (city, data) => ({
  type: ActionType.LOAD_DATA,
  payloadCity: city,
  payloadData: data
})

export const requireAuthorization = (status, login) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
  payloadLogin: login,
})
