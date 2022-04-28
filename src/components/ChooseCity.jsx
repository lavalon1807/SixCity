import React from 'react'

const ChooseCity = (props) => {
  const {items, onClick, className, chooseClass} = props

  const classChoose = chooseClass ? `tabs__item--active` : ''

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

export default ChooseCity
