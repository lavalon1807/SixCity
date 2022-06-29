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

export const sendMassage = (massage) => ({
  type: ActionType.SEND_COMMENTS,
  payload: massage,
})

export const loadComments = (comments, user) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
  user: user,
})
