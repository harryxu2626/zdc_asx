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

import buffr from "../../../public/BUFFR.json";
import dcafr from "../../../public/DCAFR.json";
import krant from "../../../public/KRANT.json";
import luray from "../../../public/LURAY.json";
import ojaay from "../../../public/ojaay.json";
import tyson from "../../../public/TYSON.json";
import wooly from "../../../public/WOOLY.json";

const Tooltips = (params) => {
  const map = useMap();
  const [coords, setCoords] = useState({});
  const [tooltip, setTooltip] = useState("");

  useEffect(() => {
    if (!map) return;

    map.addEventListener("mousemove", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);

  const { lat, lng } = coords;

  useEffect(() => {
    if (!lat) return;

    setTooltip("");

    // setTooltip("");
    var buffrHover = leafletPip.pointInLayer([lng, lat], L.geoJson(buffr));
    var dcafrHover = leafletPip.pointInLayer([lng, lat], L.geoJson(dcafr));
    var krantHover = leafletPip.pointInLayer([lng, lat], L.geoJson(krant));
    var lurayHover = leafletPip.pointInLayer([lng, lat], L.geoJson(luray));
    var ojaayHover = leafletPip.pointInLayer([lng, lat], L.geoJson(ojaay));
    var tysonHover = leafletPip.pointInLayer([lng, lat], L.geoJson(tyson));
    var woolyHover = leafletPip.pointInLayer([lng, lat], L.geoJson(wooly));

    if (buffrHover.length && params.sectors?.showBUFFR) {
      setTooltip(
        buffrHover[0] &&
          `BUFFR: ${
            buffrHover[0] &&
            Object.entries(buffrHover[0]?.feature.properties)
              .filter(([k, v]) => v !== null && k !== "fid")[0][0]
              .split(" ")
              .reverse()
              .join(" ")
          }`
      );
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
    }

    if (dcafrHover.length && params.sectors?.showDCAFR) {
      setTooltip(
        dcafrHover[0] &&
          `DCAFR: ${
            dcafrHover[0] &&
            Object.entries(dcafrHover[0]?.feature.properties)
              .filter(([k, v]) => v !== null && k !== "fid")[0][0]
              .split(" ")
              .reverse()
              .join(" ")
          }`
      );
    }

    if (krantHover.length && params.sectors?.showKRANT) {
      setTooltip(
        krantHover[0] &&
          `KRANT: ${
            krantHover[0] &&
            Object.entries(krantHover[0]?.feature.properties)
              .filter(([k, v]) => v !== null && k !== "fid")[0][0]
              .split(" ")
              .reverse()
              .join(" ")
          }`
      );

      if (dcafrHover.length && params.sectors?.showDCAFR) {
        setTooltip(
          (tooltip) =>
            tooltip +
            ` DCAFR: ${
              dcafrHover[0] &&
              Object.entries(dcafrHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } `
        );
      }
    }

    if (lurayHover.length && params.sectors?.showLURAY) {
      setTooltip(
        lurayHover[0] &&
          `LURAY: ${
            lurayHover[0] &&
            Object.entries(lurayHover[0]?.feature.properties)
              .filter(([k, v]) => v !== null && k !== "fid")[0][0]
              .split(" ")
              .reverse()
              .join(" ")
          }`
      );

      if (dcafrHover.length && params.sectors?.showDCAFR) {
        setTooltip(
          (tooltip) =>
            tooltip +
            ` DCAFR: ${
              dcafrHover[0] &&
              Object.entries(dcafrHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } `
        );
      }
    }

    if (ojaayHover.length && params.sectors?.showOJAAY) {
      setTooltip(
        ojaayHover[0] &&
          `OJAAY: ${
            ojaayHover[0] &&
            Object.entries(ojaayHover[0]?.feature.properties)
              .filter(([k, v]) => v !== null && k !== "fid")[0][0]
              .split(" ")
              .reverse()
              .join(" ")
          }`
      );

      if (lurayHover.length && params.sectors?.showLURAY) {
        setTooltip(
          (tooltip) =>
            `LURAY: ${
              lurayHover[0] &&
              Object.entries(lurayHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } ` + tooltip
        );
      }

      if (krantHover.length && params.sectors?.showKRANT) {
        setTooltip(
          (tooltip) =>
            `KRANT: ${
              krantHover[0] &&
              Object.entries(krantHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } ` + tooltip
        );
      }

      if (dcafrHover.length && params.sectors?.showDCAFR) {
        setTooltip(
          (tooltip) =>
            tooltip +
            ` DCAFR: ${
              dcafrHover[0] &&
              Object.entries(dcafrHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } `
        );
      }
    }

    if (tysonHover.length && params.sectors?.showTYSON) {
      setTooltip(
        tysonHover[0] &&
          `TYSON: ${
            tysonHover[0] &&
            Object.entries(tysonHover[0]?.feature.properties)
              .filter(([k, v]) => v !== null && k !== "fid")[0][0]
              .split(" ")
              .reverse()
              .join(" ")
          }`
      );

      if (lurayHover.length && params.sectors?.showLURAY) {
        setTooltip(
          (tooltip) =>
            tooltip +
            ` LURAY: ${
              lurayHover[0] &&
              Object.entries(lurayHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            }`
        );
      }

      if (krantHover.length && params.sectors?.showKRANT) {
        setTooltip(
          (tooltip) =>
            tooltip +
            ` KRANT: ${
              krantHover[0] &&
              Object.entries(krantHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            }`
        );
      }

      if (ojaayHover.length && params.sectors?.showOJAAY) {
        setTooltip(
          (tooltip) =>
            tooltip +
            `  OJAAY: ${
              ojaayHover[0] &&
              Object.entries(ojaayHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            }`
        );
      }

      if (dcafrHover.length && params.sectors?.showDCAFR) {
        setTooltip(
          (tooltip) =>
            tooltip +
            ` DCAFR: ${
              dcafrHover[0] &&
              Object.entries(dcafrHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            }`
        );
      }
    }

    if (woolyHover.length && params.sectors?.showWOOLY) {
      setTooltip(
        woolyHover[0] &&
          `WOOLY: ${
            woolyHover[0] &&
            Object.entries(woolyHover[0]?.feature.properties)
              .filter(([k, v]) => v !== null && k !== "fid")[0][0]
              .split(" ")
              .reverse()
              .join(" ")
          }`
      );

      if (buffrHover.length && params.sectors?.showBUFFR) {
        setTooltip(
          (tooltip) =>
            `BUFFR: ${
              buffrHover[0] &&
              Object.entries(buffrHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } ` + tooltip
        );
      }

      if (dcafrHover.length && params.sectors?.showDCAFR) {
        setTooltip(
          (tooltip) =>
            ` DCAFR: ${
              dcafrHover[0] &&
              Object.entries(dcafrHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } ` + tooltip
        );
      }

      if (ojaayHover.length && params.sectors?.showOJAAY) {
        setTooltip(
          (tooltip) =>
            ` OJAAY: ${
              ojaayHover[0] &&
              Object.entries(ojaayHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } ` + tooltip
        );
      }

      if (krantHover.length && params.sectors?.showKRANT) {
        setTooltip(
          (tooltip) =>
            `KRANT: ${
              krantHover[0] &&
              Object.entries(krantHover[0]?.feature.properties)
                .filter(([k, v]) => v !== null && k !== "fid")[0][0]
                .split(" ")
                .reverse()
                .join(" ")
            } ` + tooltip
        );
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
  }, [lat, lng, tooltip]);

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

  return (
    <>
      {lat && (
        <div
          style={{
            display: "flex",
            minWidth: "1vw",
            maxWidth: "175px",
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
          <Typography>{tooltip}</Typography>
        </div>
      )}
    </>
  );
};

export default Tooltips;
