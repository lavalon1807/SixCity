import React, {useState} from 'react'
import ChooseCity from './ChooseCity'
import {offer, city} from '../mocks/offer'
import {connect} from 'react-redux'

const ADD_POST = 'ADD_POST'

const LoadCity = (props) => {
  const {items, onClick, currentcity} = props

  return(
    items.map((item) => <ChooseCity
      key={item}
      items={item}
      className={currentcity === item}
      onClick={onClick}
      />
    )
  )
}

export default LoadCity
