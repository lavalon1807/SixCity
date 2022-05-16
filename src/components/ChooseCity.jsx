import React from 'react'
import {connect} from 'react-redux'

const ChooseCity = (props) => {
  const {items, onClick, className, chooseClass} = props

  const classChoose = className ? `tabs__item--active` : ''
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

export default (ChooseCity)
