import { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap, Circle } from 'react-leaflet'
import { Heading } from './styles'

export function ChangeView({ coords }) {
  const map = useMap()
  map.setView(coords, 16)
  return null
}

const options = {
  doubleClickZoom: false,
  closePopupOnClick: false,
  dragging: false,
  zoomSnap: false,
  zoomDelta: false,
  trackResize: false,
  touchZoom: false,
  scrollWheelZoom: false,
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 6.2203846, lng: -75.5746662 })

  const center = [geoData.lat, geoData.lng]

  return (
    <MapContainer
      center={center}
      zoom={2}
      style={{ height: '100vh' }}
      {...options}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {geoData?.lat && geoData?.lng && (
        <Circle
          center={[geoData.lat, geoData.lng]}
          pathOptions={{
            fillColor: 'white',
            color: 'white',
            weight: '1',
          }}
          radius={30}
        />
      )}
      <ChangeView coords={center} />
      <Heading>
        <span className="title">NoLineal Headquarters</span>
        <br />
        <span className="content">
          Cra 44 # 18 56, Medell&iacute;n, Ant, Colombia
        </span>
        <br />
        <span className="content">(+57) 312 212 24 32</span>
        <br />
        <span className="content">
          <a href={'mailto:contacto@nolineal.co'}>contacto@nolineal.co</a>
        </span>
      </Heading>
    </MapContainer>
  )
}
