import React from 'react'
import {connect} from 'react-redux'

const ADD_POST = 'ADD_POST'
const ChooseCity = (props) => {
  const {items, onClick, chooseClass, className, currentCity} = props

  const classChoose = currentCity === items ? `tabs__item--active` : ''

  return(
    <>
      <li className="locations__item" onClick={onClick}>
        <a className={`locations__item-link tabs__item ${classChoose}`}>
          <span>{items}</span>
        </a>
      </li>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity
})

export default connect(mapStateToProps)(ChooseCity)
