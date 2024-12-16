import * as React from "react";
import { GeoJSON } from "react-leaflet";

import { mtvJSON } from "../../data/sectorJSON";
import {mtvPalette} from "src/data/palette";

const NorthMtvSectors = (params) => {
  // console.log(params.region)
  return (
    <>
      {params.sectors.showDCAFR && (
        <GeoJSON
          data={mtvJSON.dcafrNorth}
          style={{ weight: 1, color: mtvPalette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showKRANT && (
        <GeoJSON
          data={mtvJSON.krantNorth}
          style={{ weight: 1, color: mtvPalette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showLURAY && (
        <GeoJSON
          data={mtvJSON.luray}
          style={{ weight: 1, color: mtvPalette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showOJAAY && (
        <GeoJSON
          data={mtvJSON.ojaayNorth}
          style={{ weight: 1, color: mtvPalette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showTYSON && (
        <GeoJSON
          data={mtvJSON.tysonNorth}
          style={{ weight: 1, color: mtvPalette[4] }}
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
          data={mtvJSON.dcafrSouth}
          style={{ weight: 1, color: mtvPalette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showKRANT && (
        <GeoJSON
          data={mtvJSON.krantSouth}
          style={{ weight: 1, color: mtvPalette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showLURAY && (
        <GeoJSON
          data={mtvJSON.luraySouth}
          style={{ weight: 1, color: mtvPalette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showOJAAY && (
        <GeoJSON
          data={mtvJSON.ojaaySouth}
          style={{ weight: 1, color: mtvPalette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showTYSON && (
        <GeoJSON
          data={mtvJSON.tysonSouth}
          style={{ weight: 1, color: mtvPalette[4] }}
          interactive={false}
        />
      )}
    </>
  );
};

const mtvSectors = (params) => {
  switch (params.region) {
    case "MTV_NORTH":
      return <NorthMtvSectors {...params} />;
    case "MTV_SOUTH":
      return <SouthMtvSectors {...params} />;
  }
};

export default mtvSectors;
