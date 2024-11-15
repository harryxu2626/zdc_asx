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

import buffr from "../../../public/BUFFR_CHP.json";
import dcafr from "../../../public/DCAFR.json";
import krant from "../../../public/KRANT.json";
import luray from "../../../public/LURAY.json";
import ojaay from "../../../public/ojaay.json";
import tyson from "../../../public/TYSON.json";
import wooly from "../../../public/WOOLY.json";

import bwifsEast from "../../../public/BWIFS_EAST.json";
import bwifsWest from "../../../public/BWIFS_WEST.json";
import gracoEast from "../../../public/GRACO_EAST.json";
import gracoWest from "../../../public/GRACO_WEST.json";
import woolyEast from "../../../public/WOOLY_EAST.json";
import woolyWest from "../../../public/WOOLY_WEST.json";

const PctSectors = (params) => {
  return (
    <>
      {params.sectors.showBUFFR && (
        <GeoJSON
          data={buffr}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showDCAFR && (
        <GeoJSON
          data={dcafr}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showKRANT && (
        <GeoJSON
          data={krant}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showLURAY && (
        <GeoJSON
          data={luray}
          style={{ weight: 1, color: "#f9c74f" }}
          interactive={false}
        />
      )}

      {params.sectors.showOJAAY && (
        <GeoJSON
          data={ojaay}
          style={{ weight: 1, color: "#90be6d" }}
          interactive={false}
        />
      )}

      {params.sectors.showTYSON && (
        <GeoJSON
          data={tyson}
          style={{ weight: 1, color: "#43aa8b" }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={wooly}
          style={{ weight: 1, color: "#577590" }}
          interactive={false}
        />
      )}
    </>
  );
};

const EastChpSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showBUFFR && (
        <GeoJSON
          data={buffr}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showBWIFS && (
        <GeoJSON
          data={bwifsEast}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showGRACO && (
        <GeoJSON
          data={gracoEast}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={woolyEast}
          style={{ weight: 1, color: "#f9c74f" }}
          interactive={false}
        />
      )}
    </>
  );
};

const WestChpSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showBUFFR && (
        <GeoJSON
          data={buffr}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showBWIFS && (
        <GeoJSON
          data={bwifsWest}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showGRACO && (
        <GeoJSON
          data={gracoWest}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={woolyWest}
          style={{ weight: 1, color: "#f9c74f" }}
          interactive={false}
        />
      )}
    </>
  );
};

const Sectors = (params) => {
  switch (params.region) {
    case "CHP_EAST":
      return <EastChpSectors {...params} />;
    case "CHP_WEST":
      return <WestChpSectors {...params} />;
    default:
      return <PctSectors {...params} />;
  }

 
};

export default Sectors;
