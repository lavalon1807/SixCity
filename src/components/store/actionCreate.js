import {ActionType} from './action'

export const loadOffer = (data) => ({
  type: ActionType.LOAD_DATA,
  payload: data
})
