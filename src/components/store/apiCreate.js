import {AuthorizationStatus} from '../const'
import {loadOffer, requireAuthorization} from './actionCreate'

//с помощью этой функции мы тащим с сервера определенные данные

const cityReduce = (data) => {
  const initial = 'Paris'
  const cities = data.reduce((appacity, currentValue) => {
    return [...appacity, currentValue.city.name]
  }, [initial])

  const unicumCities = [...new Set(cities)]
  return loadOffer(unicumCities, data)
}


export const fetchOfferList = () => (dispatch, _getState, api) => {
  api.get(`/hotels`).then(({data}) => {
    dispatch(cityReduce(data))
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
