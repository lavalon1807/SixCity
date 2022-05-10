import React, { useEffect, useRef, useState} from 'react'
import L from 'leaflet'
import PropTypes from 'prop-types'
import {mapCoords} from '../../mocks/Coords'
import {city} from '../../mocks/offer'
import {useParams} from 'react-router-dom'

const Map = (props) => {
  const {items, active, coords, currentcity, massChooseCoords, activeCity, massChooseCards} = props
  let marker
  let pork = []
  let pork2=[]
  const mapRef = useRef();
  const params = useParams()
  const id = Number(params.id);

// прописываем слой -карту

  useEffect(()=>{

   if(!id) {
     mapRef.current =  L.map('map').setView([48.856663, 2.351556], 11)
   } else {
     for(let i = 0; i < city.length; i++) {
       if(city[i] === massChooseCards[0].city) {
          mapRef.current =  L.map('map').setView(mapCoords[i], 11)
        }
     }
   }

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    .addTo(mapRef.current)
  }, [])

// добавляем метки
const filteredMass = massChooseCards.filter((item) => item.id !== id)
const containerNeiborhoodCoords = []
 for(let i = 0; i < filteredMass.length; i++) {
   containerNeiborhoodCoords.push(massChooseCoords[i])
 }

const generMarker = (coord) => {
  const customIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [30, 30]
  })

  pork = L.marker({
    lat: coord.lat,
    lng: coord.lng
  },
  {
    icon: customIcon
  })
  pork2.push(pork)
  pork.addTo(mapRef.current)
}

  useEffect(() => {
    if(!id) {
      massChooseCoords.forEach(generMarker) //используем внутри forEch callback функцию
    } else {
      ggg.slice(0, 3).forEach(generMarker)  //используем внутри forEch callback функцию
    }

    return () => {
      for(let i = 0; i < pork2.length; i++) {
        mapRef.current.removeLayer(pork2[i])
      }
    }
  }, [massChooseCoords])


  for(let i = 0; i < city.length; i++) {
    if(activeCity === city[i]) {
      mapRef.current.panTo(mapCoords[i])
    }
  }

// добавляем динамику меткам при наведении

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
