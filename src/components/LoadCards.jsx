import React, {useState} from 'react';
import Card from './Card'
import offer from '../mocks/offer'
import PropTypes from 'prop-types'
import Property from './Property'


const LoadCards = (props) => {
  const [step, setStep] = useState(offer)
  const ggg = Math.floor(Math.random(step))

  const {onMouseEnter, onMouseLeave} = props
  return(
    step.map(item =>
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

// useEffect(()=>{
//     if(active) {

//         const customIcon = L.icon({
//           iconUrl: `img/pin-active.svg`,
//           iconSize: [30, 30]
//         })

//         marker = L.marker({
//         lat: coords[1].lat,
//         lng: coords[1].lng
//       },
//       {
//         icon: customIcon
//       })
//       .addTo(mapRef.current)

//       return () => {
//         mapRef.current.removeLayer(marker)
//       }
//     }
//   }, [mapRef.current, active])
