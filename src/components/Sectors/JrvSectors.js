import * as React from "react";
import { GeoJSON } from "react-leaflet";

import { jrvJSON } from "../../data/sectorJSON";
import { jrvPalette } from "src/data/palette";

const NorthJrvSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showCHOEA && (
        <GeoJSON
          data={jrvJSON.choea}
          style={{ weight: 1, color: jrvPalette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showCHOWE && (
        <GeoJSON
          data={jrvJSON.chowe}
          style={{ weight: 1, color: jrvPalette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDE && (
        <GeoJSON
          data={jrvJSON.cside}
          style={{ weight: 1, color: jrvPalette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDW && (
        <GeoJSON
          data={jrvJSON.csidw}
          style={{ weight: 1, color: jrvPalette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showFLTRK && (
        <GeoJSON
          data={jrvJSON.fltrkNorth}
          style={{ weight: 1, color: jrvPalette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showRICFR && (
        <GeoJSON
          data={jrvJSON.ricfrNorth}
          style={{ weight: 1, color: jrvPalette[5] }}
          interactive={false}
        />
      )}

      {params.sectors.showTAPPA && (
        <GeoJSON
          data={jrvJSON.tappaNorth}
          style={{ weight: 1, color: jrvPalette[5] }}
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
          data={jrvJSON.choea}
          style={{ weight: 1, color: jrvPalette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showCHOWE && (
        <GeoJSON
          data={jrvJSON.chowe}
          style={{ weight: 1, color: jrvPalette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDE && (
        <GeoJSON
          data={jrvJSON.cside}
          style={{ weight: 1, color: jrvPalette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showCSIDW && (
        <GeoJSON
          data={jrvJSON.csidw}
          style={{ weight: 1, color: jrvPalette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showFLTRK && (
        <GeoJSON
          data={jrvJSON.fltrkSouth}
          style={{ weight: 1, color: jrvPalette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showRICFR && (
        <GeoJSON
          data={jrvJSON.ricfrSouth}
          style={{ weight: 1, color: jrvPalette[5] }}
          interactive={false}
        />
      )}

      {params.sectors.showTAPPA && (
        <GeoJSON
          data={jrvJSON.tappaSouth}
          style={{ weight: 1, color: jrvPalette[5] }}
          interactive={false}
        />
      )}
    </>
  );
};

const jrvSectors = (params) => {
  switch (params.region) {
    case "JRV_NORTH":
      return <NorthJrvSectors {...params} />;
    case "JRV_SOUTH":
      return <SouthJrvSectors {...params} />;
  }
};

export default jrvSectors;
