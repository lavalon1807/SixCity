import React, { useEffect, useRef, useState} from 'react'
import L from 'leaflet'
import PropTypes from 'prop-types'
import {mapCoords, Coords} from '../../mocks/Coords'
import {city} from '../../mocks/offer'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'

const Map = (props) => {
  const {active, massChooseCoords, activeCity, massChooseCards, currentcity} = props
  const {location} = massChooseCards[0].city // берем координаты выбранного города

  let marker
  let pork = []
  let pork2=[]
  const mapRef = useRef();
  const params = useParams()
  const id = Number(params.id);

// прописываем слой -карту

  useEffect(()=>{

   if(!id) {
     mapRef.current =  L.map('map').setView([
       location.latitude,
       location.longitude
     ], location.zoom)
   }  else {
     mapRef.current =  L.map('map').setView([
       location.latitude,
       location.longitude
     ], location.zoom)
   }

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    .addTo(mapRef.current)
  }, [])

// добавляем метки
// const filteredMassCards = massChooseCards.filter((item) => item.id !== id)
// const filteredMassCoords = massChooseCoords.filter((item) => item.id !== id)

// const containerNeiborhoodCoords = []
//  for(let i = 0; i < filteredMassCards.length; i++) {
//     containerNeiborhoodCoords.push(filteredMassCoords[i])
//  }

// const generMarker = (coord) => {
//   const customIcon = L.icon({
//     iconUrl: './img/pin.svg',
//     iconSize: [30, 30]
//   })

//   pork = L.marker({
//     lat: coord.location.latitude,
//     lng: coord.location.longitude
//   },
//   {
//     icon: customIcon
//   })
//   pork2.push(pork)
//   pork.addTo(mapRef.current)
//   pork.bindPopup(coord.title)
// }

  // useEffect(() => {
  //   if(!id) {
  //     massChooseCards.forEach(generMarker) //используем внутри forEch callback функцию
  //   } else {
  //     containerNeiborhoodCoords.slice(0, 3).forEach(generMarker)  //используем внутри forEch callback функцию
  //   }

  //   return () => {
  //     for(let i = 0; i < pork2.length; i++) {
  //       mapRef.current.removeLayer(pork2[i])
  //     }
  //   }
  // }, [massChooseCards])


  // for(let i = 0; i < city.length; i++) {
  //   if(activeCity === city[i]) {
  //     mapRef.current.panTo(mapCoords[i])
  //   }
  // }

// добавляем динамику меткам при наведении

  // useEffect(()=>{
  //     if(active) {
  //       massChooseCards.forEach((coord) => {
  //         if(active.id === coord.id) {
  //           const customIcon = L.icon({
  //             iconUrl: `img/pin-active.svg`,
  //             iconSize: [30, 30]
  //           })

  //           marker = L.marker({
  //             lat: coord.location.latitude,
  //             lng: coord.location.longitude
  //           },
  //           {
  //             icon: customIcon
  //           })
  //           .addTo(mapRef.current)
  //         }
  //     })
  //       return () => {
  //             mapRef.current.removeLayer(marker)
  //           }
  //   }
  // }, [mapRef.current, active])



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
