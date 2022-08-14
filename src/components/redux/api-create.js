import {userAuth} from '../../mocks/constants';
import {LoadData, LoadDataFavorite, LoadOfferOne, LoadOfferNearby} from './change-data-api';
import {requireAuthorization} from './user-process/action-user';
import {loadComments} from './comments-process/action-comments';

export const fetchOfferList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`).then(({data}) => {
    dispatch(LoadData(data, data))
  })
}

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  api.get(`hotels/${id}`)
    .then((data) => {
       dispatch(LoadOfferOne(data.data))
    })
}

export const sendFavorites = ({id, status, datas}) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/${status}`, {id, status})
    .then((data)=>{
      dispatch(LoadData(datas, data.data))
    })
}

export const fetchFavorites = () => (dispatch, _getState, api) => {
  api.get(`/favorite`).then((data)=>{
    dispatch(LoadDataFavorite(data.data))
  })
}

export const fetchNearby = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(data => {
      dispatch(LoadOfferNearby(data.data))
    })
}

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(()=>dispatch(requireAuthorization(userAuth.NO_AUTH)))
    .catch(()=>{})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(()=> dispatch(requireAuthorization(userAuth.AUTH, email)))
)

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(()=> dispatch(requireAuthorization(userAuth.NO_AUTH)))
)


export const takeComments = (id) => (dispatch, getState, api) => {
  return api.get(`/comments/${id}`)
    .then((data)=>{
      dispatch(loadComments(data.data, id))
    })
}

export const sendComments = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then((data) => dispatch(loadComments(data.data, id)))
)
