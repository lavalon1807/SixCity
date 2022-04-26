import React, { useEffect, useRef} from 'react'
import L from 'leaflet'
import PropTypes from 'prop-types'

const Map = (props) => {
  let marker
  const {items, active, coords} = props

  const mapRef = useRef();

  useEffect(()=>{
    mapRef.current =  L.map('map', {
      center: [52.3909553943508, 4.85309666406198],
      zoom: 11
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    .addTo(mapRef.current)

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

      return () => {
        mapRef.current.remove()
      }
    })
  }, [])

  useEffect(()=>{
    if(active) {
      coords.forEach((coord) => {
        if(active.id === coord.id) {
          const customIcon = L.icon({
            iconUrl: `img/pin-active.svg`,
            iconSize: [30, 30]
          })

          marker = L.marker({
            lat: coord.lat,
            lng: coord.lng
          },
          {
            icon: customIcon
          })
          .addTo(mapRef.current)
        }
    })
      return () => {
            mapRef.current.removeLayer(marker)
          }
    }
  }, [mapRef.current, active])

  return(
    <div id="map" style={{height: "100%"}} ref={mapRef}></div>
  )
}

Map.propTypes = {
  Coords: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
}


export default Map
