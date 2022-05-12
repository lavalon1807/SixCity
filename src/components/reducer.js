import {useState} from 'react'
import {ActionType} from './action'
import {city} from '../mocks/offer'

// const initialState = {
//   cityNow: city[0],
// }
const initialState = 'Paris'






const reducer = (state = initialState, action) => {
//   const [currentcity, setCurrentcity] = useState(initialState)
//   const toggle = useCallback((e) => {
//   setCurrentcity(e.currentTarget.innerText)
//   setActiveCity(e.currentTarget.innerText)
// }, [])
//   const classChoose = currentcity==='Paris' ? `tabs__item--active` : ''

  switch(action.type) {
    case ActionType.CHOOSE_CITY:
      return {...state, class: {classChoose}}

    default: state
  }
}

export {reducer}
