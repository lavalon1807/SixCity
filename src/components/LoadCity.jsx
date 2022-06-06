import React, {useState, useEffect} from 'react'
import ChooseCity from './ChooseCity'
import {offer, city} from '../mocks/offer'
import {connect} from 'react-redux'


const LoadCity = (props) => {
  const {onClick, data, isDataLoaded} = props
  console.log(data)

  return(
    city.map((item) => <ChooseCity
      key={item}
      items={item}
      onClick={onClick}
      />
    )
  )
}

const mapStateToProps = (state) => ({
  data: state.data,
  isDataLoaded: state.isDataLoaded,
})

export default connect(mapStateToProps)(LoadCity)
