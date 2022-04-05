import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import PropTypes from 'prop-types'

const Map = () => {
  const mapRef = useRef();

  useEffect(()=>{
    mapRef.current =  L.map('map', {
      center: [48.8419, 24.0315],
      zoom: 16
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    .addTo(mapRef.current)
  }, [])

  return(
    <div id="map" style={{height: "100%"}} ref={mapRef}></div>
  )
}


export default Map
