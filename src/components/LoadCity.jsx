import React, {useState} from 'react'
import ChooseCity from './ChooseCity'
import {offer, city} from '../mocks/offer'
import {connect} from 'react-redux'

const LoadCity = (props) => {
  const {items, onClick} = props

  return(
    items.map((item) => <ChooseCity
      key={item}
      items={item}
      onClick={onClick}
      />
    )
  )
}

export default LoadCity
