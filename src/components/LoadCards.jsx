import React from 'react';
import Card from './Card'
import PropTypes from 'prop-types'

const LoadCards = (props) => {
  const {onMouseEnter, onMouseLeave, massChooseCards, addCardInFavorite} = props

  return(
    massChooseCards.map(item =>
        <Card
        key = {item.id}
        items={item}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        addCardInFavorite={addCardInFavorite}/>
      )
  )
}




export default LoadCards
