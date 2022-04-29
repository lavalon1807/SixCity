import React, {useState} from 'react'
import ChooseCity from './ChooseCity'
import {offer, city} from '../mocks/offer'


const LoadCity = (props) => {
  const {items, onClick, refss} = props

  return(
    items.map((item) => <ChooseCity
      key={item}
      items={item}
      className={refss === item}
      onClick={onClick}
      />
    )
  )
}

export default LoadCity
