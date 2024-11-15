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

import buffr from "../../../public/BUFFR_CHP.json";
import dcafr from "../../../public/DCAFR.json";
import krant from "../../../public/KRANT.json";
import luray from "../../../public/LURAY.json";
import ojaay from "../../../public/ojaay.json";
import tyson from "../../../public/TYSON.json";
import wooly from "../../../public/WOOLY.json";

// import buffrCHP from "../../../public/BUFFR_CHP.json"
import bwifsEast from "../../../public/BWIFS_EAST.json"
import bwifsWest from "../../../public/BWIFS_WEST.json"
import gracoEast from "../../../public/GRACO_EAST.json"
import gracoWest from "../../../public/GRACO_WEST.json"
import woolyEast from "../../../public/WOOLY_EAST.json"
import woolyWest from "../../../public/WOOLY_WEST.json"

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
    var buffrHover = leafletPip.pointInLayer([lng, lat], L.geoJson(buffr));
    var dcafrHover = leafletPip.pointInLayer([lng, lat], L.geoJson(dcafr));
    var krantHover = leafletPip.pointInLayer([lng, lat], L.geoJson(krant));
    var lurayHover = leafletPip.pointInLayer([lng, lat], L.geoJson(luray));
    var ojaayHover = leafletPip.pointInLayer([lng, lat], L.geoJson(ojaay));
    var tysonHover = leafletPip.pointInLayer([lng, lat], L.geoJson(tyson));
    var woolyHover = leafletPip.pointInLayer([lng, lat], L.geoJson(wooly));

    var bwifsEastHover = leafletPip.pointInLayer([lng,lat], L.geoJson(bwifsEast));
    var bwifsWestHover = leafletPip.pointInLayer([lng,lat], L.geoJson(bwifsWest));
    var gracoEastHover = leafletPip.pointInLayer([lng,lat], L.geoJson(gracoEast));
    var gracoWestHover = leafletPip.pointInLayer([lng,lat], L.geoJson(gracoWest));
    var woolyEastHover = leafletPip.pointInLayer([lng,lat], L.geoJson(woolyEast));
    var woolyWestHover = leafletPip.pointInLayer([lng,lat], L.geoJson(woolyWest));

    if (buffrHover.length && params.sectors?.showBUFFR) {
      let lowAlt = Object.entries(buffrHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = buffrHover[0] ? {
        sector: "BUFFR",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(buffrHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "BUFFR");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
      // {
      //   buffrHover[0] &&
      //     setTooltip([
      //       ...tooltip,
      //       {
      //         sector: "BUFFR",
      //         altitude: Object.entries(buffrHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" "),
      //       },
      //     ]);
      // }
      // console.log({
      //   sector: "BUFFR",
      //   altitude: Object.entries(buffrHover[0]?.feature.properties)
      //     .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //     .split(" ")
      //     .reverse()
      //     .join(" "),
      // });
      // console.log(tooltip)
      // mapTooltip.setContent(buffrHover[0] && `BUFFR: ${buffrHover[0] && Object.entries(buffrHover[0]?.feature.properties).filter(([k,v])=>v!==null&&k!=='fid')[0][0].split(" ").reverse().join(" ")}`)

      // // map.openTooltip(mapTooltip)
      // // map.on('mouseover', (e)=>{
      // //   tooltip.setLatLng([lng, lat]);
      // // });

      // map.on('mouseover', (e)=>{
      //   mapTooltip.setLatLng([lat,lng])
      // });

      // map.on('mousemove', (e)=>{
      //   mapTooltip.setLatLng([lat,lng])

      // });

      // map.on('mouseout', (e)=>{
      //   map.closeTooltip(mapTooltip)
      // });
    }else{
      let index = tooltip.findIndex((item) => item.sector === "BUFFR");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (dcafrHover.length && params.sectors?.showDCAFR) {
      // setTooltip(
      //   dcafrHover[0] &&
      //     `DCAFR: ${
      //       dcafrHover[0] &&
      //       Object.entries(dcafrHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      let lowAlt = Object.entries(dcafrHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = dcafrHover[0] ? {
        sector: "DCAFR",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(Object.entries(dcafrHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[0]),
        highAltitude: Number(Object.entries(dcafrHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "DCAFR");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "DCAFR");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (krantHover.length && params.sectors?.showKRANT) {
      let lowAlt = Object.entries(krantHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = krantHover[0] ? {
        sector: "KRANT",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(krantHover[0]?.feature.properties)
        .filter(([k, v]) => v !== null && k !== "fid")[0][0]
        .split(" ")
        .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "KRANT");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }

      // setTooltip(
      //   krantHover[0] &&
      //     `KRANT: ${
      //       krantHover[0] &&
      //       Object.entries(krantHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      // if (dcafrHover.length && params.sectors?.showDCAFR) {
      //   setTooltip(
      //     (tooltip) =>
      //       tooltip +
      //       ` DCAFR: ${
      //         dcafrHover[0] &&
      //         Object.entries(dcafrHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } `
      //   );
      // }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "KRANT");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (lurayHover.length && params.sectors?.showLURAY) {
      let lowAlt = Object.entries(lurayHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = lurayHover[0] ? {
        sector: "LURAY",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(lurayHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "LURAY");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
      // setTooltip(
      //   lurayHover[0] &&
      //     `LURAY: ${
      //       lurayHover[0] &&
      //       Object.entries(lurayHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      // if (dcafrHover.length && params.sectors?.showDCAFR) {
      //   setTooltip(
      //     (tooltip) =>
      //       tooltip +
      //       ` DCAFR: ${
      //         dcafrHover[0] &&
      //         Object.entries(dcafrHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } `
      //   );
      // }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "LURAY");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (ojaayHover.length && params.sectors?.showOJAAY) {
      let lowAlt = Object.entries(ojaayHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = ojaayHover[0] ? {
        sector: "OJAAY",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(Object.entries(ojaayHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[0]),
        highAltitude: Number(Object.entries(ojaayHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "OJAAY");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
      // setTooltip(
      //   ojaayHover[0] &&
      //     `OJAAY: ${
      //       ojaayHover[0] &&
      //       Object.entries(ojaayHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      // if (lurayHover.length && params.sectors?.showLURAY) {
      //   setTooltip(
      //     (tooltip) =>
      //       `LURAY: ${
      //         lurayHover[0] &&
      //         Object.entries(lurayHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } ` + tooltip
      //   );
      // }

      // if (krantHover.length && params.sectors?.showKRANT) {
      //   setTooltip(
      //     (tooltip) =>
      //       `KRANT: ${
      //         krantHover[0] &&
      //         Object.entries(krantHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } ` + tooltip
      //   );
      // }

      // if (dcafrHover.length && params.sectors?.showDCAFR) {
      //   setTooltip(
      //     (tooltip) =>
      //       tooltip +
      //       ` DCAFR: ${
      //         dcafrHover[0] &&
      //         Object.entries(dcafrHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } `
      //   );
      // }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "OJAAY");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (tysonHover.length && params.sectors?.showTYSON) {
      let lowAlt = Object.entries(tysonHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = tysonHover[0] ? {
        sector: "TYSON",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(Object.entries(tysonHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[0]),
        highAltitude: Number(Object.entries(tysonHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "TYSON");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
      // setTooltip(
      //   tysonHover[0] &&
      //     `TYSON: ${
      //       tysonHover[0] &&
      //       Object.entries(tysonHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      // if (lurayHover.length && params.sectors?.showLURAY) {
      //   setTooltip(
      //     (tooltip) =>
      //       tooltip +
      //       ` LURAY: ${
      //         lurayHover[0] &&
      //         Object.entries(lurayHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       }`
      //   );
      // }

      // if (krantHover.length && params.sectors?.showKRANT) {
      //   setTooltip(
      //     (tooltip) =>
      //       tooltip +
      //       ` KRANT: ${
      //         krantHover[0] &&
      //         Object.entries(krantHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       }`
      //   );
      // }

      // if (ojaayHover.length && params.sectors?.showOJAAY) {
      //   setTooltip(
      //     (tooltip) =>
      //       tooltip +
      //       `  OJAAY: ${
      //         ojaayHover[0] &&
      //         Object.entries(ojaayHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       }`
      //   );
      // }

      // if (dcafrHover.length && params.sectors?.showDCAFR) {
      //   setTooltip(
      //     (tooltip) =>
      //       tooltip +
      //       ` DCAFR: ${
      //         dcafrHover[0] &&
      //         Object.entries(dcafrHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       }`
      //   );
      // }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "TYSON");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (woolyHover.length && params.sectors?.showWOOLY && params.region === 'SHD') {

      let lowAlt = Object.entries(woolyHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = woolyHover[0] ? {
        sector: "WOOLY",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(Object.entries(woolyHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[0]),
        highAltitude: Number(Object.entries(woolyHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "WOOLY");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
      // setTooltip(
      //   woolyHover[0] &&
      //     `WOOLY: ${
      //       woolyHover[0] &&
      //       Object.entries(woolyHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      // if (buffrHover.length && params.sectors?.showBUFFR) {
      //   setTooltip(
      //     (tooltip) =>
      //       `BUFFR: ${
      //         buffrHover[0] &&
      //         Object.entries(buffrHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } ` + tooltip
      //   );
      // }

      // if (dcafrHover.length && params.sectors?.showDCAFR) {
      //   setTooltip(
      //     (tooltip) =>
      //       ` DCAFR: ${
      //         dcafrHover[0] &&
      //         Object.entries(dcafrHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } ` + tooltip
      //   );
      // }

      // if (ojaayHover.length && params.sectors?.showOJAAY) {
      //   setTooltip(
      //     (tooltip) =>
      //       ` OJAAY: ${
      //         ojaayHover[0] &&
      //         Object.entries(ojaayHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } ` + tooltip
      //   );
      // }

      // if (krantHover.length && params.sectors?.showKRANT) {
      //   setTooltip(
      //     (tooltip) =>
      //       `KRANT: ${
      //         krantHover[0] &&
      //         Object.entries(krantHover[0]?.feature.properties)
      //           .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //           .split(" ")
      //           .reverse()
      //           .join(" ")
      //       } ` + tooltip
      //   );
      // }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "WOOLY");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (bwifsEastHover.length && params.sectors?.showBWIFS && params.region === 'CHP_EAST') {
      // setTooltip(
      //   dcafrHover[0] &&
      //     `DCAFR: ${
      //       dcafrHover[0] &&
      //       Object.entries(dcafrHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      let lowAlt = Object.entries(bwifsEastHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = bwifsEastHover[0] ? {
        sector: "BWIFS_E",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(bwifsEastHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "BWIFS_E");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "BWIFS_E");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (bwifsWestHover.length && params.sectors?.showBWIFS && params.region === 'CHP_WEST') {
      // setTooltip(
      //   dcafrHover[0] &&
      //     `DCAFR: ${
      //       dcafrHover[0] &&
      //       Object.entries(dcafrHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      let lowAlt = Object.entries(bwifsWestHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = bwifsWestHover[0] ? {
        sector: "BWIFS_W",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(bwifsWestHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "BWIFS_W");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "BWIFS_W");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (gracoEastHover.length && params.sectors?.showGRACO && params.region === 'CHP_EAST') {
      // setTooltip(
      //   dcafrHover[0] &&
      //     `DCAFR: ${
      //       dcafrHover[0] &&
      //       Object.entries(dcafrHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      let lowAlt = Object.entries(gracoEastHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = gracoEastHover[0] ? {
        sector: "GRACO_E",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(gracoEastHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "GRACO_E");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "GRACO_E");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (gracoWestHover.length && params.sectors?.showGRACO && params.region === 'CHP_WEST') {
      // setTooltip(
      //   dcafrHover[0] &&
      //     `DCAFR: ${
      //       dcafrHover[0] &&
      //       Object.entries(dcafrHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      let lowAlt = Object.entries(gracoWestHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = gracoWestHover[0] ? {
        sector: "GRACO_W",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(gracoWestHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "GRACO_W");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "GRACO_W");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (woolyEastHover.length && params.sectors?.showWOOLY && params.region === 'CHP_EAST') {
      // setTooltip(
      //   dcafrHover[0] &&
      //     `DCAFR: ${
      //       dcafrHover[0] &&
      //       Object.entries(dcafrHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      let lowAlt = Object.entries(woolyEastHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = woolyEastHover[0] ? {
        sector: "WOOLY_E",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(lowAlt),
        highAltitude: Number(Object.entries(woolyEastHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "WOOLY_E");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "WOOLY_E");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }

    if (woolyWestHover.length && params.sectors?.showWOOLY && params.region === 'CHP_WEST') {
      // setTooltip(
      //   dcafrHover[0] &&
      //     `DCAFR: ${
      //       dcafrHover[0] &&
      //       Object.entries(dcafrHover[0]?.feature.properties)
      //         .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      //         .split(" ")
      //         .reverse()
      //         .join(" ")
      //     }`
      // );

      let lowAlt = Object.entries(woolyWestHover[0]?.feature.properties)
      .filter(([k, v]) => v !== null && k !== "fid")[0][0]
      .split(" ")
      .reverse()[0];
      

      let data = woolyWestHover[0] ? {
        sector: "WOOLY_W",
        lowAltitude: lowAlt === "SFC" ? 0 : Number(Object.entries(woolyWestHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[0]),
        highAltitude: Number(Object.entries(woolyWestHover[0]?.feature.properties)
          .filter(([k, v]) => v !== null && k !== "fid")[0][0]
          .split(" ")
          .reverse()[1]),
      } : '';

      let index = tooltip.findIndex((item) => item.sector === "WOOLY_W");
      if (index === -1) {
        tooltip.push(data);
      } else {
        tooltip[index] = data;
      }
    }else{
      let index = tooltip.findIndex((item) => item.sector === "WOOLY_W");
      if (index > -1){
        tooltip.splice(index,1)
      }
    }
    // if (buffrHover.length && woolyHover.length)
    //   setTooltip(
    //     `${Object.keys(buffrHover[0].feature.properties)[2]}+++${
    //       Object.keys(woolyHover[0].feature.properties)[2]
    //     }`
    //   );
    // else setTooltip("");
    // console.log(buffrHover[0]?.feature.properties)
    //   console.log(`BUFFR: ${buffrHover[0] && Object.entries(buffrHover[0]?.feature.properties).filter(([k,v])=>v!==null&&k!=='fid')[0][0].split(" ").reverse().join(" ")}`)
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
