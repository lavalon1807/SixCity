// import {AuthorizationStatus} from '../const'
import {loadOffer} from './actionCreate'

export const fetchOfferList = () => (dispatch, _getState, api) => {
  return api.get(`/hotels`)
    .then(({data}) => {dispatch(loadOffer(data))})
}
