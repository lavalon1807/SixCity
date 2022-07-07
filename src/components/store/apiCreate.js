import {AuthorizationStatus} from '../const'
import {requireAuthorization, sendMassage, loadComments} from './actionCreate'
import {LoadData} from './LoadData'

export const fetchOfferList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`).then(({data}) => {
    dispatch(LoadData(data))
  })
}

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(()=>dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(()=>{})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(()=> dispatch(requireAuthorization(AuthorizationStatus.AUTH, email)))
)

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(()=> dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
)


export const takeComments = (id) => (dispatch, getState, api) => {
  const state = getState();
  const comment = state.loadComments[id];

  return api.get(`/comments/${id}`)
    .then((data)=>{
      dispatch(loadComments(data.data, id))
    })
}

export const sendComments = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then((data) => dispatch(loadComments(data.data, id)))
)
