import React from 'react'
import { MapContainer, TileLayer, Marker,Popup, Polyline} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux'
import icon from '../assets/plain.png'
import L from 'leaflet'
 
const MapView = ({openModel}) => {
    const store = useSelector((store)=> store)

  const planeIcon =  L.icon({
      iconUrl: icon,
      iconSize:[15,15],
      iconAnchor:[16,16],
      
    })
    

  return (
    <MapContainer center={[38.728587, 35.173275]} zoom={6} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {store.flights.map((flight)=>(
     <Marker icon={planeIcon} key={flight.id} position={[flight.lat, flight.lng]}>
     <Popup>
    <div className='popup'>
        <span>Kod : {flight.code}</span>
        <button onClick={()=> openModel(flight.id)} className=' btn btn-primary '>Detay</button>
    </div>
     </Popup>
     
   </Marker>
   ))}
  <Polyline positions={store.route}/>
  
  </MapContainer>
  )
}

export default MapView