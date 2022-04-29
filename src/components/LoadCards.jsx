import React, {useState} from 'react';
import Card from './Card'
import {offer, city} from '../mocks/offer'
import PropTypes from 'prop-types'
import Property from './Property'

const LoadCards = (props) => {
  const {refss} = props
  const [step, setStep] = useState(offer)

  const {onMouseEnter, onMouseLeave} = props

  let rrr = []
  step.forEach((item, index) => {
    const ttt = refss === item.city ? rrr.push(item) : step
  })
console.log(rrr)
  return(
    rrr.map(item =>
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
