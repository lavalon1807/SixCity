import React from 'react';
import Card from './Card'
import PropTypes from 'prop-types'

const LoadCards = (props) => {
  const {onMouseEnter, onMouseLeave, massChooseCards} = props

  return(
    massChooseCards.map(item =>
        <Card
        key = {item.id}
        items={item}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}/>
      )
  )
}




export default LoadCards
