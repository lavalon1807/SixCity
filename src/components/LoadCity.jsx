import React, {useState} from 'react'
import ChooseCity from './ChooseCity'
import {offer, city} from '../mocks/offer'


const LoadCity = (props) => {
  const initialState = 'Paris'
  const [ref, setRef] = useState(initialState)
  const {items, onClick} = props

  const toggle = (e) => {
    setRef(e.currentTarget.innerText)
  }

  return(
    items.map((item, index) => <ChooseCity
      key={item}
      items={item}
      className={ref === item}
      onClick={toggle}
      />
    )
  )
}

export default LoadCity
