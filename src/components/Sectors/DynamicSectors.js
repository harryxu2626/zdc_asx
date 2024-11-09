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




import buffr from "../../../public/BUFFR.json";
import dcafr from "../../../public/DCAFR.json";
import krant from "../../../public/KRANT.json";
import luray from "../../../public/LURAY.json";
import ojaay from "../../../public/ojaay.json";
import tyson from "../../../public/TYSON.json";
import wooly from "../../../public/WOOLY.json";

import Tooltips from "../Tooltips/tooltips";



const Sectors = (params) => {
//   const GeoJSON = React.lazy(() =>
//   import("react-leaflet").then(module => {
//     return { default: module.GeoJSON };
//   })
// );

  // Tooltips(params)
  // const CustomTooltips = () => {
  //   const map = useMap();
  //   const [coords, setCoords] = useState({});
  //   const [tooltip, setTooltip] = useState("");
  
  //   useEffect(() => {
  //     if (!map) return;
  
  //     map.addEventListener("mousemove", (e) => {
  //       setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
  //     });
  //   }, [map]);
  
  //   const { lat, lng } = coords;
  
  //   useEffect(() => {
  //     if (!lat) return;
  
  //     // setTooltip("");
  //     var buffrHover = leafletPip.pointInLayer([lng, lat], L.geoJson(buffr));
  //     var dcafrHover = leafletPip.pointInLayer([lng, lat], L.geoJson(dcafr));
  //     var krantHover = leafletPip.pointInLayer([lng, lat], L.geoJson(krant));
  //     var lurayHover = leafletPip.pointInLayer([lng, lat], L.geoJson(luray));
  //     var ojaayHover = leafletPip.pointInLayer([lng, lat], L.geoJson(ojaay));
  //     var tysonHover = leafletPip.pointInLayer([lng, lat], L.geoJson(tyson));
  //     var woolyHover = leafletPip.pointInLayer([lng, lat], L.geoJson(wooly));
  
  //     if (buffrHover.length && params.sectors?.showBUFFR) {
  //       setTooltip(
  //         buffrHover[0] &&
  //           `BUFFR: ${
  //             buffrHover[0] &&
  //             Object.entries(buffrHover[0]?.feature.properties)
  //               .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //               .split(" ")
  //               .reverse()
  //               .join(" ")
  //           }`
  //       );
  //       // mapTooltip.setContent(buffrHover[0] && `BUFFR: ${buffrHover[0] && Object.entries(buffrHover[0]?.feature.properties).filter(([k,v])=>v!==null&&k!=='fid')[0][0].split(" ").reverse().join(" ")}`)
  
  //       // // map.openTooltip(mapTooltip)
  //       // // map.on('mouseover', (e)=>{
  //       // //   tooltip.setLatLng([lng, lat]);
  //       // // });
  
  //       // map.on('mouseover', (e)=>{
  //       //   mapTooltip.setLatLng([lat,lng])
  //       // });
  
  //       // map.on('mousemove', (e)=>{
  //       //   mapTooltip.setLatLng([lat,lng])
  
  //       // });
  
  //       // map.on('mouseout', (e)=>{
  //       //   map.closeTooltip(mapTooltip)
  //       // });
  //     }
  
  //     if (dcafrHover.length && params.sectors?.showDCAFR) {
  //       setTooltip(
  //         dcafrHover[0] &&
  //           `DCAFR: ${
  //             dcafrHover[0] &&
  //             Object.entries(dcafrHover[0]?.feature.properties)
  //               .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //               .split(" ")
  //               .reverse()
  //               .join(" ")
  //           }`
  //       );
  //     }
  
  //     if (krantHover.length && params.sectors?.showKRANT) {
  //       setTooltip(
  //         krantHover[0] &&
  //           `KRANT: ${
  //             krantHover[0] &&
  //             Object.entries(krantHover[0]?.feature.properties)
  //               .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //               .split(" ")
  //               .reverse()
  //               .join(" ")
  //           }`
  //       );
  //     }
  
  //     if (lurayHover.length && params.sectors?.showLURAY) {
  //       setTooltip(
  //         lurayHover[0] &&
  //           `LURAY: ${
  //             lurayHover[0] &&
  //             Object.entries(lurayHover[0]?.feature.properties)
  //               .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //               .split(" ")
  //               .reverse()
  //               .join(" ")
  //           }`
  //       );
  
  //       if (ojaayHover.length && params.sectors?.showOJAAY) {
  //         setTooltip(
  //           (tooltip) =>
  //             tooltip +
  //             ` OJAAY: ${
  //               ojaayHover[0] &&
  //               Object.entries(ojaayHover[0]?.feature.properties)
  //                 .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //                 .split(" ")
  //                 .reverse()
  //                 .join(" ")
  //             }`
  //         );
  //       }
  //     }
  
  //     if (ojaayHover.length && params.sectors?.showOJAAY) {
  //       setTooltip(
  //         ojaayHover[0] &&
  //           `OJAAY: ${
  //             ojaayHover[0] &&
  //             Object.entries(ojaayHover[0]?.feature.properties)
  //               .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //               .split(" ")
  //               .reverse()
  //               .join(" ")
  //           }`
  //       );
  //     }
  
  //     if (tysonHover.length && params.sectors?.showTYSON) {
  //       setTooltip(
  //         tysonHover[0] &&
  //           `TYSON: ${
  //             tysonHover[0] &&
  //             Object.entries(tysonHover[0]?.feature.properties)
  //               .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //               .split(" ")
  //               .reverse()
  //               .join(" ")
  //           }`
  //       );
  
  //       if (lurayHover.length && params.sectors?.showLURAY) {
  //         setTooltip(
  //           (tooltip) =>
  //             tooltip +
  //             ` LURAY: ${
  //               lurayHover[0] &&
  //               Object.entries(lurayHover[0]?.feature.properties)
  //                 .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //                 .split(" ")
  //                 .reverse()
  //                 .join(" ")
  //             }`
  //         );
  //       }
  
  //       if (krantHover.length && params.sectors?.showKRANT) {
  //         setTooltip(
  //           (tooltip) =>
  //             tooltip +
  //             ` KRANT: ${
  //               krantHover[0] &&
  //               Object.entries(krantHover[0]?.feature.properties)
  //                 .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //                 .split(" ")
  //                 .reverse()
  //                 .join(" ")
  //             }`
  //         );
  //       }
  
  //       if (dcafrHover.length && params.sectors?.showDCAFR) {
  //         setTooltip(
  //           (tooltip) =>
  //             tooltip +
  //             ` DCAFR: ${
  //               dcafrHover[0] &&
  //               Object.entries(dcafrHover[0]?.feature.properties)
  //                 .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //                 .split(" ")
  //                 .reverse()
  //                 .join(" ")
  //             }`
  //         );
  //       }
  //     }
  
  //     if (woolyHover.length && params.sectors?.showWOOLY) {
  //       setTooltip(
  //         woolyHover[0] &&
  //           `WOOLY: ${
  //             woolyHover[0] &&
  //             Object.entries(woolyHover[0]?.feature.properties)
  //               .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //               .split(" ")
  //               .reverse()
  //               .join(" ")
  //           }`
  //       );
  
  //       if (buffrHover.length && params.sectors?.showBUFFR) {
  //         setTooltip(
  //           (tooltip) =>
  //             `BUFFR: ${
  //               buffrHover[0] &&
  //               Object.entries(buffrHover[0]?.feature.properties)
  //                 .filter(([k, v]) => v !== null && k !== "fid")[0][0]
  //                 .split(" ")
  //                 .reverse()
  //                 .join(" ")
  //             } ` + tooltip
  //         );
  //       }
  //     }

  //   }, [lat]);
  


  //   return (
  //     <Tooltip sticky>{tooltip}</Tooltip>
  //   )
  
  // }

  

  return (
      <>
      {params.sectors.showBUFFR && (
        <GeoJSON data={buffr} style={{ weight: 1, color: "#9e0059" }} interactive={false}/>
      )}

      {params.sectors.showDCAFR && (
        <GeoJSON data={dcafr} style={{ weight: 1, color: "#ff6b6b" }} interactive={false}/>
      )}

      {params.sectors.showKRANT && (
        <GeoJSON data={krant} style={{ weight: 1, color: "#f8961e" }} interactive={false}/>
      )}

      {params.sectors.showLURAY && (
        <GeoJSON data={luray} style={{ weight: 1, color: "#f9c74f" }} interactive={false}/>
      )}

      {params.sectors.showOJAAY && (
        <GeoJSON data={ojaay} style={{ weight: 1, color: "#90be6d" }} interactive={false}/>
      )}

      {params.sectors.showTYSON && (
        <GeoJSON data={tyson} style={{ weight: 1, color: "#43aa8b" }} interactive={false}/>
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON data={wooly} style={{ weight: 1, color: "#577590" }} interactive={false}/>
      )}
      </>
  );
};


export default Sectors;
