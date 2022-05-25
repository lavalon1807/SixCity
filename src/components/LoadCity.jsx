import React, {useState} from 'react'
import ChooseCity from './ChooseCity'
import {offer, city} from '../mocks/offer'
import {connect} from 'react-redux'

const LoadCity = (props) => {
  const {items, onClick, currentCity} = props

  return(
    items.map((item) => <ChooseCity
      key={item}
      items={item}
      onClick={onClick}
      className={currentCity === item}
      />
    )
  )
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
})

export default connect(mapStateToProps)(LoadCity)
