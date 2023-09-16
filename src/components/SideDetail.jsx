import axios from "axios";
import React, { useEffect, useState } from "react";
import { detailOptions } from "../helpers/constants";
import { useDispatch } from "react-redux";
import { setRoute } from "../redux/actions/slices/flightSlice";

const SideDetail = ({ setShowDetails, detailId }) => {
  const dispatch = useDispatch()
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    // uçuş id 'si her değiştiğinde önceki detay verilerini sil
    // bu sayede geçişlerde loading tetiklenir
    setDetail(null);

    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => {
        setDetail(res.data);
        dispatch(setRoute(res.data.trail));
      });
  }, [detailId]);
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close">
          <span onClick={() => setShowDetails(false)}>X</span>
        </p>
        {!detail ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h2>{detail.aircraft.model?.text}</h2>
            <h2>{detail.aircraft.model.code}</h2>
            <p>KuyruknNo: {detail.aircraft.registration}</p>
            <img src={detail.aircraft.images.large[1].src} alt="" />
            <p>Havayolu : {detail.airline.name}</p>
            <p>Nereden  :<a target="_blank" href={detail.airport.destination?.website}>{detail.airport.destination.name}</a></p>
            <p>Nereye   :<a target="_blank" href={detail.airport.origin?.website}>{detail.airport.origin.name}</a></p>
            <p>
                <span className="status">Durum  </span>
                
                <span style={{background: detail.status.icon, color:'black',borderRadius:'4px',padding:3}}>{detail.status?.text}</span>
            </p>
         

          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
