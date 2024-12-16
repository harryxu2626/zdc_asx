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
import palette from "src/data/palette";

// const PctSectors = (params) => {
//   return (
//     <>
//       {params.sectors.showBUFFR && (
//         <GeoJSON
//           data={sectorJSON.default.buffr}
//           style={{ weight: 1, color: palette[0] }}
//           interactive={false}
//         />
//       )}

//       {params.sectors.showDCAFR && (
//         <GeoJSON
//           data={sectorJSON.default.dcafr}
//           style={{ weight: 1, color: palette[1] }}
//           interactive={false}
//         />
//       )}

//       {params.sectors.showKRANT && (
//         <GeoJSON
//           data={sectorJSON.default.krant}
//           style={{ weight: 1, color: palette[2] }}
//           interactive={false}
//         />
//       )}

//       {params.sectors.showLURAY && (
//         <GeoJSON
//           data={sectorJSON.default.luray}
//           style={{ weight: 1, color: palette[3] }}
//           interactive={false}
//         />
//       )}

//       {params.sectors.showOJAAY && (
//         <GeoJSON
//           data={sectorJSON.default.ojaay}
//           style={{ weight: 1, color: palette[4] }}
//           interactive={false}
//         />
//       )}

//       {params.sectors.showTYSON && (
//         <GeoJSON
//           data={sectorJSON.default.tyson}
//           style={{ weight: 1, color: "#43aa8b" }}
//           interactive={false}
//         />
//       )}

//       {params.sectors.showWOOLY && (
//         <GeoJSON
//           data={sectorJSON.default.wooly}
//           style={{ weight: 1, color: "#577590" }}
//           interactive={false}
//         />
//       )}
//     </>
//   );
// };

const EastChpSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showBUFFR && (
        <GeoJSON
          data={sectorJSON.default.buffr}
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showBWIFS && (
        <GeoJSON
          data={sectorJSON.default.bwifsEast}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showGRACO && (
        <GeoJSON
          data={sectorJSON.default.gracoEast}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={sectorJSON.default.woolyEast}
          style={{ weight: 1, color: palette[3] }}
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
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showBWIFS && (
        <GeoJSON
          data={sectorJSON.default.bwifsWest}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showGRACO && (
        <GeoJSON
          data={sectorJSON.default.gracoWest}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showWOOLY && (
        <GeoJSON
          data={sectorJSON.default.woolyWest}
          style={{ weight: 1, color: palette[3] }}
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
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showBARIN && (
        <GeoJSON
          data={sectorJSON.default.barinNorth}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFE && (
        <GeoJSON
          data={sectorJSON.default.iadfeNorth}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFW && (
        <GeoJSON
          data={sectorJSON.default.iadfwNorth}
          style={{ weight: 1, color: palette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showMANNE && (
        <GeoJSON
          data={sectorJSON.default.manneNorth}
          style={{ weight: 1, color: palette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showMULRR && (
        <GeoJSON
          data={sectorJSON.default.mulrrNorth}
          style={{ weight: 1, color: palette[5] }}
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
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showBARIN && (
        <GeoJSON
          data={sectorJSON.default.barinSouth}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFE && (
        <GeoJSON
          data={sectorJSON.default.iadfeSouth}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFW && (
        <GeoJSON
          data={sectorJSON.default.iadfwSouth}
          style={{ weight: 1, color: palette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showMANNE && (
        <GeoJSON
          data={sectorJSON.default.manneSouth}
          style={{ weight: 1, color: palette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showMULRR && (
        <GeoJSON
          data={sectorJSON.default.mulrrSouth}
          style={{ weight: 1, color: palette[5] }}
          interactive={false}
        />
      )}
    </>
  );
};

const NorthMtvSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showDCAFR && (
        <GeoJSON
          data={sectorJSON.default.dcafrNorth}
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showKRANT && (
        <GeoJSON
          data={sectorJSON.default.krantNorth}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showLURAY && (
        <GeoJSON
          data={sectorJSON.default.luray}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showOJAAY && (
        <GeoJSON
          data={sectorJSON.default.ojaayNorth}
          style={{ weight: 1, color: palette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showTYSON && (
        <GeoJSON
          data={sectorJSON.default.tysonNorth}
          style={{ weight: 1, color: palette[4] }}
          interactive={false}
        />
      )}
    </>
  );
};

const SouthMtvSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showDCAFR && (
        <GeoJSON
          data={sectorJSON.default.dcafrSouth}
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showKRANT && (
        <GeoJSON
          data={sectorJSON.default.krantSouth}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showLURAY && (
        <GeoJSON
          data={sectorJSON.default.luraySouth}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showOJAAY && (
        <GeoJSON
          data={sectorJSON.default.ojaaySouth}
          style={{ weight: 1, color: palette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showTYSON && (
        <GeoJSON
          data={sectorJSON.default.tysonSouth}
          style={{ weight: 1, color: palette[4] }}
          interactive={false}
        />
      )}
    </>
  );
};

const NorthJrvSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showCHOEA && (
        <GeoJSON
          data={sectorJSON.default.choea}
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showCHOWE && (
        <GeoJSON
          data={sectorJSON.default.chowe}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDE && (
        <GeoJSON
          data={sectorJSON.default.cside}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDW && (
        <GeoJSON
          data={sectorJSON.default.csidw}
          style={{ weight: 1, color: palette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showFLTRK && (
        <GeoJSON
          data={sectorJSON.default.fltrkNorth}
          style={{ weight: 1, color: palette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showRICFR && (
        <GeoJSON
          data={sectorJSON.default.ricfrNorth}
          style={{ weight: 1, color: palette[5] }}
          interactive={false}
        />
      )}

      {params.sectors.showTAPPA && (
        <GeoJSON
          data={sectorJSON.default.tappaNorth}
          style={{ weight: 1, color: palette[5] }}
          interactive={false}
        />
      )}
    </>
  );
};

const SouthJrvSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showCHOEA && (
        <GeoJSON
          data={sectorJSON.default.choea}
          style={{ weight: 1, color: palette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showCHOWE && (
        <GeoJSON
          data={sectorJSON.default.chowe}
          style={{ weight: 1, color: palette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDE && (
        <GeoJSON
          data={sectorJSON.default.cside}
          style={{ weight: 1, color: palette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDW && (
        <GeoJSON
          data={sectorJSON.default.csidw}
          style={{ weight: 1, color: palette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showFLTRK && (
        <GeoJSON
          data={sectorJSON.default.fltrkSouth}
          style={{ weight: 1, color: palette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showRICFR && (
        <GeoJSON
          data={sectorJSON.default.ricfrSouth}
          style={{ weight: 1, color: palette[5] }}
          interactive={false}
        />
      )}

      {params.sectors.showTAPPA && (
        <GeoJSON
          data={sectorJSON.default.tappaSouth}
          style={{ weight: 1, color: palette[5] }}
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
      return <NorthShdSectors {...params} />;
    case "SHD_SOUTH":
      return <SouthShdSectors {...params} />;
    case "MTV_NORTH":
      return <NorthMtvSectors {...params} />;
    case "MTV_SOUTH":
      return <SouthMtvSectors {...params} />;
    case "JRV_NORTH":
      return <NorthJrvSectors {...params} />;
    case "JRV_SOUTH":
      return <SouthJrvSectors {...params} />;
    default:
      return <PctSectors {...params} />;
  }
};

export default Sectors;

// export const chpSectors = (params) => {
//   switch (params.region) {
//     case "CHP_EAST":
//       return <EastChpSectors {...params} />;
//     case "CHP_WEST":
//       return <WestChpSectors {...params} />;
//   }
// };

// export const shdSectors = (params) => {
//   switch (params.region) {
//     case "SHD_NORTH":
//       return <NorthShdSectors {...params} />;
//     case "SHD_SOUTH":
//       return <SouthShdSectors {...params} />;
//   }
// };

// export const mtvSectors = (params) => {
//   switch (params.region) {
//     case "MTV_NORTH":
//       return <NorthMtvSectors {...params} />;
//     case "MTV_SOUTH":
//       return <SouthMtvSectors {...params} />;
//   }
// };

// export const jrvSectors = (params) => {
//   switch (params.region) {
//     case "JRV_NORTH":
//       return <NorthJrvSectors {...params} />;
//     case "JRV_SOUTH":
//       return <SouthJrvSectors {...params} />;
//   }
// };
