import React, {useCallback, useState} from 'react';
import Card from './Card'
import offer from '../mocks/offer'
import PropTypes from 'prop-types'


const LoadCards = (props) => {
  const {items} = props
  const [active, setActive] = useState(null)
  const handleMouseEnter = useCallback((item) => {
    setActive(item)
  }, [])
  const handleMouseLeave = useCallback((item) => {
    setActive(null)
  }, [])

  console.log(active)
  return(
    offer.map(item =>
      <Card
      key = {item.id}
      items={item}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} />
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
