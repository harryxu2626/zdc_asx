import * as React from "react";
import { useRef, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  GeoJSON,
  Tooltip,
} from "react-leaflet";
import { Typography } from "@mui/material";

import L from "leaflet";

import * as leafletPip from "@mapbox/leaflet-pip";

import * as sectorJSON from "../../data/sectorJSON";

import {TooltipConditional} from "./tooltipConditional";

const Tooltips = (params) => {
  const map = useMap();
  const [coords, setCoords] = useState({});
  const [tooltip, setTooltip] = useState([]);

  useEffect(() => {
    if (!map) return;

    map.addEventListener("mousemove", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);

  const { lat, lng } = coords;

  useEffect(() => {
    if (!lat) return;
    // setTooltip([]);

    for (const sectors in sectorJSON.default){
      // console.log(sectors)
      // console.log(sectors.substring(0,5).toUpperCase())
      // console.log(params.sectors['show'+sectors.substring(0,5).toUpperCase()])


      // console.log(sectorJSON.default[sectors])
      TooltipConditional(tooltip, [lng,lat], sectorJSON.default[sectors], params.sectors['show'+sectors.substring(0,5).toUpperCase()],params.region)
    }

       
    console.log(tooltip);
  }, [lat]);

  // console.log("hwat" + tooltip);
  //   return (
  //     <div
  //       style={{
  //         minWidth: "10vw",
  //         minHeight: "10vw",
  //         position: "fixed",
  //         right: 0,
  //         top: 0,
  //         backgroundColor: "#272727",
  //         zIndex: 800,
  //         borderRadius: "10px",
  //         margin: "1rem",
  //         padding: "1rem",
  //       }}
  //     >
  //         {tooltip && <h1 style={{color:"#FFF"}}>{tooltip}</h1>}

  //       <h2 style={{ color: "#fff" }}>{tooltip ? tooltip : 'what'}</h2>
  //       {console.log("hello" + tooltip)}
  //     </div>
  //   );

  tooltip.sort((a,b)=> b.lowAltitude - a.lowAltitude)

  return (
    <>
      {lat && (
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            minWidth: "1vw",
            maxWidth: "250px",
            minHeight: "1vw",
            position: "fixed",
            right: 0,
            top: 0,
            backgroundColor: "#272727",
            color: "#fff",
            zIndex: 800,
            borderRadius: "10px",
            margin: "1rem",
            padding: "1rem",
            
          }}
        >
          {tooltip.map((item) => {
            return (

              <Typography key={item.sector}>
                {item.sector}: {item.lowAltitude===0 ? "SFC" : item.lowAltitude} {item.highAltitude ? item.highAltitude : ''}
              </Typography>
   
            );
          })}
        </div>
      )}
    </>
  );
};

export default Tooltips;
