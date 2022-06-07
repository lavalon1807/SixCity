import {ActionType} from './action'

export const loadOffer = (city, data) => ({
  type: ActionType.LOAD_DATA,
  payloadCity: city,
  payloadData: data
})

export const requireAuthorization = (tipe) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: tipe,
})
