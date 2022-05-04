import React, { useEffect, useRef, useState} from 'react'
import L from 'leaflet'
import PropTypes from 'prop-types'

  const paris = [48.856663, 2.351556] // Paris
  const cologne = [50.930779, 6.938399] // Cologne
  const brussels = [50.846697, 4.352544] // Brussels
  const amsterdam = [52.373036, 4.892413] // Amsterdam
  const hamburg = [53.550688, 9.992895] // Hamburg
  const dusseldorf = [51.230569, 6.787428] //  Dusseldorf


const Map = (props) => {
  const {items, active, coords, currentcity, massChooseCoords, ttt, yyy, activeCity} = props
  let marker
  let pork = []
  let pork2=[]
  const mapRef = useRef();
  //ttt - массив координат полученный через пропс
  const ggg = ttt[0]
  const [tif, setTif] = useState([52.373036, 4.892413]);
  useEffect(()=>{
    mapRef.current =  L.map('map', {
      center: tif,
      zoom: 11
    })
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    .addTo(mapRef.current)
  }, [])

  useEffect(() => {
    massChooseCoords.forEach((coord) => {
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
    })
    return () => {
      for(let i = 0; i < pork2.length; i++) {
        mapRef.current.removeLayer(pork2[i])
      }
          }
  }, [massChooseCoords])
if(activeCity) {
  if(currentcity === 'Dusseldorf') {
    mapRef.current.setView(dusseldorf)
  } else if(currentcity === 'Paris') {
    mapRef.current.setView(paris)
  } else if(currentcity === 'Cologne') {
    mapRef.current.setView(cologne)
  } else if(currentcity === 'Brussels') {
    mapRef.current.setView(brussels)
  } else if(currentcity === 'Amsterdam') {
    mapRef.current.setView(amsterdam)
  } else if(currentcity === 'Hamburg') {
    mapRef.current.setView(hamburg)
  }
 }





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
