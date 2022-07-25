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

export const loadComments = (comments, id) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
  meta: id,
})

export const addFavorites = (favor, data) => ({
  type: ActionType.ADD_FAVORITES,
  payload: favor,
  favorData: data,
})
