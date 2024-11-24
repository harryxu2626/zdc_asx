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

// import buffr from "../../../public/BUFFR_CHP.json";
// import dcafr from "../../../public/DCAFR.json";
// import krant from "../../../public/KRANT.json";
// import luray from "../../../public/LURAY.json";
// import ojaay from "../../../public/ojaay.json";
// import tyson from "../../../public/TYSON.json";
// import wooly from "../../../public/WOOLY.json";

// import bwifsEast from "../../../public/BWIFS_EAST.json";
// import bwifsWest from "../../../public/BWIFS_WEST.json";
// import gracoEast from "../../../public/GRACO_EAST.json";
// import gracoWest from "../../../public/GRACO_WEST.json";
// import woolyEast from "../../../public/WOOLY_EAST.json";
// import woolyWest from "../../../public/WOOLY_WEST.json";

import * as sectorJSON from "../../data/sectorJSON";

const PctSectors = (params) => {
  return (
    <>
      {params.sectors.showBUFFR && (
        <GeoJSON
          data={sectorJSON.default.buffr}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showDCAFR && (
        <GeoJSON
          data={sectorJSON.default.dcafr}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showKRANT && (
        <GeoJSON
          data={sectorJSON.default.krant}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showLURAY && (
        <GeoJSON
          data={sectorJSON.default.luray}
          style={{ weight: 1, color: "#f9c74f" }}
          interactive={false}
        />
      )}

      {params.sectors.showOJAAY && (
        <GeoJSON
          data={sectorJSON.default.ojaay}
          style={{ weight: 1, color: "#90be6d" }}
          interactive={false}
        />
      )}

      {params.sectors.showTYSON && (
        <GeoJSON
          data={sectorJSON.default.tyson}
          style={{ weight: 1, color: "#43aa8b" }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={sectorJSON.default.wooly}
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
          data={sectorJSON.default.buffr}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showBWIFS && (
        <GeoJSON
          data={sectorJSON.default.bwifsEast}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showGRACO && (
        <GeoJSON
          data={sectorJSON.default.gracoEast}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={sectorJSON.default.woolyEast}
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
          data={sectorJSON.default.buffr}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showBWIFS && (
        <GeoJSON
          data={sectorJSON.default.bwifsWest}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showGRACO && (
        <GeoJSON
          data={sectorJSON.default.gracoWest}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={sectorJSON.default.woolyWest}
          style={{ weight: 1, color: "#f9c74f" }}
          interactive={false}
        />
      )}
    </>
  );
};

const NorthShdSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showASPER && (
        <GeoJSON
          data={sectorJSON.default.asperNorth}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showBARIN && (
        <GeoJSON
          data={sectorJSON.default.barinNorth}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFE && (
        <GeoJSON
          data={sectorJSON.default.iadfeNorth}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFW && (
        <GeoJSON
          data={sectorJSON.default.iadfwNorth}
          style={{ weight: 1, color: "#f9c74f" }}
          interactive={false}
        />
      )}

      {params.sectors.showMANNE && (
        <GeoJSON
          data={sectorJSON.default.manneNorth}
          style={{ weight: 1, color: "#90be6d" }}
          interactive={false}
        />
      )}

      {params.sectors.showMULRR && (
        <GeoJSON
          data={sectorJSON.default.mulrrNorth}
          style={{ weight: 1, color: "#43aa8b" }}
          interactive={false}
        />
      )}
    </>
  );
};

const SouthShdSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showASPER && (
        <GeoJSON
          data={sectorJSON.default.asperSouth}
          style={{ weight: 1, color: "#9e0059" }}
          interactive={false}
        />
      )}

      {params.sectors.showBARIN && (
        <GeoJSON
          data={sectorJSON.default.barinSouth}
          style={{ weight: 1, color: "#ff6b6b" }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFE && (
        <GeoJSON
          data={sectorJSON.default.iadfeSouth}
          style={{ weight: 1, color: "#f8961e" }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFW && (
        <GeoJSON
          data={sectorJSON.default.iadfwSouth}
          style={{ weight: 1, color: "#f9c74f" }}
          interactive={false}
        />
      )}

      {params.sectors.showMANNE && (
        <GeoJSON
          data={sectorJSON.default.manneSouth}
          style={{ weight: 1, color: "#90be6d" }}
          interactive={false}
        />
      )}

      {params.sectors.showMULRR && (
        <GeoJSON
          data={sectorJSON.default.mulrrSouth}
          style={{ weight: 1, color: "#43aa8b" }}
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
    case "SHD_NORTH":
      return <NorthShdSectors {...params}/>;
    case "SHD_SOUTH":
      return <SouthShdSectors {...params}/>;
    default:
      return <PctSectors {...params} />;
  }
};

export default Sectors;
