import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import PropTypes from 'prop-types'
import Coords from '../../mocks/Coords'

const Map = () => {
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

    Coords.forEach((coord) => {
      const customIcon = L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [27, 39]
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

  return(
    <div id="map" style={{height: "100%"}} ref={mapRef}></div>
  )
}


export default Map
