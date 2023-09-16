import { useEffect, useState } from "react"
import Header from "./components/Header"
import MapView from "./pages/MapView"
import ListView from "./pages/ListView"
import { useDispatch } from "react-redux"
import { getFlights } from "./redux/actions/flightActions"
import SideDetail from "./components/SideDetail"


function App() {
 
const [showMapView, setShowMapView] = useState(true)
const [showDetails, setShowDetails] = useState(false)
const [detailId, setDetailId] = useState()
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getFlights())
  },[])
  

  const openModel = (id)=>{
    setDetailId(id);
    setShowDetails(true);
    }

  return (
  <>
  <Header/>
  <div className="view-buttons">
    <button className={showMapView ? 'active' : ''} onClick={()=>setShowMapView(true)}>Harita Görunumu</button>
    <button className={!showMapView ? 'active' : ''} onClick={()=>setShowMapView(false)}>Liste Görunumu</button>
   
  </div>
  {showMapView ? <MapView openModel={openModel}/> : <ListView openModel={openModel}/>}
  {showDetails && <SideDetail detailId={detailId} setShowDetails={setShowDetails}/>}
  
  </>
  )
}

export default App
