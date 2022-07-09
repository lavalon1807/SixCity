import React, {useState, useEffect} from 'react'
import ChooseCity from './ChooseCity'
import {connect} from 'react-redux'


const LoadCity = (props) => {
  const {onClick, city, isDataLoaded} = props

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
  city: state.city,
  data: state.data,
  isDataLoaded: state.isDataLoaded,
})

export default connect(mapStateToProps)(LoadCity)
