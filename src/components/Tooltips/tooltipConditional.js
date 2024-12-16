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

import leafletPip from "@mapbox/leaflet-pip";

export function TooltipConditional(tooltip, lngLat, sector, showSector, region){
    // console.log(sector.name?.split(' ')[1])
    // console.log(region.split('_')[1])

    if (sector.name?.split(' ')[1] !== region.split('_')[1] && !["BUFFR" ,"LURAY" ,"CHOEA" ,"CHOWE" ,"CSIDE","CSIDW"].includes(sector.name?.split(' ')[0])){
        return
    }
    // console.log(params.sector)

    // console.log(L.geoJson(sector))
    // leafletPip.pointInLayer([1,1],L.geoJSON(sector))

    console.log(sector)
    console.log(lngLat)
    console.log(L.geoJson(sector))
    console.log(leafletPip.pointInLayer(lngLat,L.geoJson(sector)))

    var hover = leafletPip.pointInLayer(lngLat,L.geoJson(sector))

    if (hover.length && showSector) {
        console.log(hover[0]?.feature.properties)
        console.log(Object.entries(hover[0]?.feature.properties).filter(([k, v]) => v !== null && k !== "fid"))
        
        let lowAlt = Object.entries(hover[0]?.feature.properties)
        .filter(([k, v]) => v !== null && k !== "fid")[0][0]
        .split(" ")
        .reverse()[0];
        
  
        let data = hover[0] ? {
          sector: sector.name,
          lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
          highAltitude: Number(Object.entries(hover[0]?.feature.properties)
            .filter(([k, v]) => v !== null && k !== "fid")[0][0]
            .split(" ")
            .reverse()[1]),
        } : '';
  
        let index = tooltip.findIndex((item) => item.sector === sector.name);
        if (index === -1) {
          tooltip.push(data);
        } else {
          tooltip[index] = data;
        }
      }else{
        let index = tooltip.findIndex((item) => item.sector === sector.name);
        if (index > -1){
          tooltip.splice(index,1)
        }
      }

    // return tooltip
}
