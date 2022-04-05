import { useEffect, useRef, React } from 'react'
import {MapContainer, TileLayer, Marker, leafletPane, leafletTile, leafletMarkerIcon} from 'leaflet'
import PropTypes from 'prop-types'

import "../../node_modules/leaflet/dist/leaflet.css"

const Map = ({city, points}) => {
  const position = [51.505, -0.09]

render(
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)
}

export default Map
