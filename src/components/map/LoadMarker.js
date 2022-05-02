import React from 'react'

const LoadMarker = () => {
  const {coords} = props
  return (
    coords.forEach((coord) => {
      const customIcon = L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [30, 30]
      })

      L.marker({
        lat: coord.lat,
        lng: coord.lng
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(coord.title)
    })
  )
}

export default LoadMarker
