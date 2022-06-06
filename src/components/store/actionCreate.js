import {ActionType} from './action'

export const loadOffer = (data) => ({
  type: ActionType.LOAD_DATA,
  payload: data,
})

export const requireAuthorization = (tipe) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: tipe,
})
