import React, {useCallback, useState} from 'react';
import Card from './Card'
import offer from '../mocks/offer'
import PropTypes from 'prop-types'
import Property from './Property'


const LoadCards = (props) => {
  const {onMouseEnter, onMouseLeave} = props
  return(
    offer.map(item =>
      <Card
      key = {item.id}
      items={item}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} />
    )
  )
}

LoadCards.propTypes = {
  offer: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.number.isRequired,
        attribute: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
  )


}

export default LoadCards;
