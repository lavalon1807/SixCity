import {AuthorizationStatus} from '../const'
import {loadOffer} from './actionCreate'

export const fetchOfferList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`).then(({data}) => {
    const initial = []
    const cities = data.reduce((appacity, currentValue) => {
      return [...appacity, currentValue.city.name]
    }, [])
    const unicumCities = [...new Set(cities)]
    dispatch(loadOffer(unicumCities))})
}

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(()=>dispatch(actionCreate.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(()=>{})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(()=> dispatch(actionCreate.requireAuthorization(AuthorizationStatus.AUTH)))
)
