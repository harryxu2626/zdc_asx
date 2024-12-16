import * as React from "react";
import { GeoJSON } from "react-leaflet";

import { shdJSON } from "../../data/sectorJSON";
import { shdPalette } from "src/data/palette";

const NorthShdSectors = (params) => {
  //   console.log(params.region)
  return (
    <>
      {params.sectors.showASPER && (
        <GeoJSON
          data={shdJSON.asperNorth}
          style={{ weight: 1, color: shdPalette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showBARIN && (
        <GeoJSON
          data={shdJSON.barinNorth}
          style={{ weight: 1, color: shdPalette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFE && (
        <GeoJSON
          data={shdJSON.iadfeNorth}
          style={{ weight: 1, color: shdPalette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFW && (
        <GeoJSON
          data={shdJSON.iadfwNorth}
          style={{ weight: 1, color: shdPalette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showMANNE && (
        <GeoJSON
          data={shdJSON.manneNorth}
          style={{ weight: 1, color: shdPalette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showMULRR && (
        <GeoJSON
          data={shdJSON.mulrrNorth}
          style={{ weight: 1, color: shdPalette[5] }}
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
          data={shdJSON.asperSouth}
          style={{ weight: 1, color: shdPalette[0] }}
          interactive={false}
        />
      )}

      {params.sectors.showBARIN && (
        <GeoJSON
          data={shdJSON.barinSouth}
          style={{ weight: 1, color: shdPalette[1] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFE && (
        <GeoJSON
          data={shdJSON.iadfeSouth}
          style={{ weight: 1, color: shdPalette[2] }}
          interactive={false}
        />
      )}

      {params.sectors.showIADFW && (
        <GeoJSON
          data={shdJSON.iadfwSouth}
          style={{ weight: 1, color: shdPalette[3] }}
          interactive={false}
        />
      )}

      {params.sectors.showMANNE && (
        <GeoJSON
          data={shdJSON.manneSouth}
          style={{ weight: 1, color: shdPalette[4] }}
          interactive={false}
        />
      )}

      {params.sectors.showMULRR && (
        <GeoJSON
          data={shdJSON.mulrrSouth}
          style={{ weight: 1, color: shdPalette[5] }}
          interactive={false}
        />
      )}
    </>
  );
};

const shdSectors = (params) => {
  switch (params.region) {
    case "SHD_NORTH":
      return <NorthShdSectors {...params} />;
    case "SHD_SOUTH":
      return <SouthShdSectors {...params} />;
  }
};

export default shdSectors;
