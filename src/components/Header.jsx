import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const store = useSelector((store)=> store)
  return (
    <header>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Wv_logo_proposal_flying_plane_wo_text.png" alt="" />
            <h1>Ucus Radari</h1>
        </div>
        <h4>{store.flights.length} Uçus bulundu</h4>
    </header>
  )
}

export default Header