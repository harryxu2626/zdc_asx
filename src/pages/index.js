import Head from "next/head";

import * as React from "react";
import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
// import Button from "@components/Button";
import Geojson from "@components/GeoJSON";
// import Sectors from "@components/Sectors";
import Tooltips from "@components/Tooltips";
import SectorCheckboxes from "@components/Sectors/SectorCheckboxes";
import ChangeMapZoom from "@components/Map/StaticChangeMapZoom";

import listOfSectors from "src/data/sectorObject";
import InsertMaptiler from "@components/Maptiler/InsertMaptiler";

import styles from "@styles/Home.module.scss";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";

const DEFAULT_CENTER = [38.907132, -77.036546];

import southPCT from "../../public/skinny.json";
import northPCT from "../../public/northMerged.json";
import centerMap from "../../public/center_boundary.json";

import {
  chpCheckboxes,
  shdCheckboxes,
  mtvCheckboxes,
  jrvCheckboxes,
} from "@components/Sectors/SectorCheckboxes";
import {
  ChpSectors,
  ShdSectors,
  MtvSectors,
  JrvSectors,
} from "@components/Sectors/Sectors";
// import Sectors from "@components/Sectors/Sectors";

// , shdSectors, mtvSectors, jrvSectors

// import logo from "../../public/logo.png";

export default function Home() {
  // const map = useMap();
  const [baseMap, setBaseMap] = React.useState(southPCT);
  const [region, setRegion] = React.useState("CHP_EAST");
  const [chpOps, setChpOps] = React.useState("CHP_WEST");
  const [shdOps, setShdOps] = React.useState("SHD_SOUTH");
  const [mtvOps, setMtvOps] = React.useState("MTV_NORTH");
  const [jrvOps, setJrvOps] = React.useState("JRV_SOUTH");
  // const [layers, setLayers] = React.useState([]);
  const [zoom, setZoom] = React.useState(9.5);
  const [center, setCenter] = React.useState([39, -77]);
  const [sectors, setSectors] = React.useState(listOfSectors.falseSectors);

  const handleMapSelectChange = (event) => {
    // console.log(event.target.value.name);
    console.log(region);
    if (event.target.value.name === "ZDC CTR BDRY") {
      // console.log("here");
      setZoom(7.5);
      setCenter([37, -76]);
    } else {
      setZoom(9.5);
      setCenter([39, -77]);
    }
    setBaseMap(event.target.value);
  };

  const handlePCTRegionChange = (event) => {
    // Object.keys(sectors).forEach(v => sectors[v] = false)
    console.log(event.target.value);

    switch (event.target.value) {
      case "CHP_WEST":
      case "CHP_EAST":
        setChpOps(event.target.value);
        break;

      case "SHD_NORTH":
      case "SHD_SOUTH":
        setShdOps(event.target.value);
        break;

      case "MTV_NORTH":
      case "MTV_SOUTH":
        setMtvOps(event.target.value);
        break;

      case "JRV_NORTH":
      case "JRV_SOUTH":
        setJrvOps(event.target.value);
        break;
    }

    // if (["JRV_NORTH", "JRV_SOUTH"].includes(event.target.value)) {
    //   setZoom(9);
    //   setCenter([38, -77]);
    // } else {
    //   setZoom(9.5);
    //   setCenter([39, -77]);
    // }

    setRegion(event.target.value);
  };

  const handleClearAll = () => {
    setSectors(listOfSectors.falseSectors);
  };

  const handleSelectAll = () => {
    setSectors(listOfSectors.trueSectors)
    // switch (region) {
    //   case "CHP_EAST":
    //   case "CHP_WEST":
    //     setSectors(listOfSectors.chpTrueSectors);
    //     break;

    //   case "SHD_NORTH":
    //   case "SHD_SOUTH":
    //     setSectors(listOfSectors.shdTrueSectors);
    //     break;

    //   case "MTV_NORTH":
    //   case "MTV_SOUTH":
    //     setSectors(listOfSectors.mtvTrueSectors);
    //     break;

    //   case "JRV_NORTH":
    //   case "JRV_SOUTH":
    //     setSectors(listOfSectors.jrvTrueSectors);
    //     break;
    // }
    // setSectors(listOfSectors.trueSectors);
  };

  // const handleCheckboxChange = (event) => {
  //   const { checked, value } = event.currentTarget;

  //   setLayers((prev) =>
  //     checked ? [...prev, value] : prev.filter((val) => val !== value)
  //   );
  // };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          minWidth: "300px",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          backgroundColor: "#272727",
          padding: "1rem",
          overflow: "auto",
        }}
      >
        <FormGroup style={{ color: "#fff" }}>
          <img
            alt="Washington ARTCC Logo"
            width="215"
            height="39"
            style={{ color: "transparent", margin: "1rem" }}
            src="/zdc_asx/logo.png"
          />
          <Typography
            variant="h6"
            color="red"
            style={{
              fontSize: "0.875rem",
              fontWeight: "bold",
              margin: `0 auto 0 auto`,
            }}
          >
            NOT FOR REAL WORLD USE
          </Typography>
          <Typography>Video Map</Typography>
          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={baseMap}
            onChange={handleMapSelectChange}
            sx={{
              border: "solid #ac2a2f",
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              margin: "1rem",
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
            }}
          >
            <MenuItem value={centerMap}>Center</MenuItem>
            <MenuItem value={northPCT}>North PCT</MenuItem>
            <MenuItem value={southPCT}>South PCT</MenuItem>
          </Select>
          <Typography>Sector Maps</Typography>

          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chpOps}
            onChange={handlePCTRegionChange}
            sx={{
              border: "solid #ac2a2f",
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              margin: "1rem",
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
            }}
          >
            {/* <MenuItem value={"SHD"}>SHD</MenuItem> */}
            <MenuItem value={"CHP_EAST"}>CHP East</MenuItem>
            <MenuItem value={"CHP_WEST"}>CHP West</MenuItem>
          </Select>

          {chpCheckboxes(setSectors, chpOps, sectors)}

          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={shdOps}
            onChange={handlePCTRegionChange}
            sx={{
              border: "solid #ac2a2f",
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              margin: "1rem",
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
            }}
          >
            <MenuItem value={"SHD_NORTH"}>SHD North</MenuItem>
            <MenuItem value={"SHD_SOUTH"}>SHD South</MenuItem>
          </Select>

          {shdCheckboxes(setSectors, shdOps, sectors)}

          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mtvOps}
            onChange={handlePCTRegionChange}
            sx={{
              border: "solid #ac2a2f",
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              margin: "1rem",
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
            }}
          >
            {" "}
            <MenuItem value={"MTV_NORTH"}>MTV North</MenuItem>
            <MenuItem value={"MTV_SOUTH"}>MTV South</MenuItem>
          </Select>

          {mtvCheckboxes(setSectors, mtvOps, sectors)}

          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={jrvOps}
            onChange={handlePCTRegionChange}
            sx={{
              border: "solid #ac2a2f",
              color: "#fff",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              margin: "1rem",
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
            }}
          >
            <MenuItem value={"JRV_NORTH"}>JRV North</MenuItem>
            <MenuItem value={"JRV_SOUTH"}>JRV South</MenuItem>
          </Select>

          {jrvCheckboxes(setSectors, jrvOps, sectors)}

          <ButtonGroup
            variant="contained"
            style={{ margin: `0 auto 1rem auto` }}
          >
            <Button
              style={{ backgroundColor: "#500E0E", borderColor: "#500E0E" }}
              onClick={handleSelectAll}
            >
              Select All
            </Button>
            <Button
              style={{ backgroundColor: "#500E0E", borderColor: "#500E0E" }}
              onClick={handleClearAll}
            >
              Clear All
            </Button>
          </ButtonGroup>

          {/* <SectorCheckboxes
            setSectors={setSectors}
            region={region}
            sectors={sectors}
          /> */}
        </FormGroup>
        {/* <div> */}
        <Typography
          variant="h6"
          color="red"
          style={{
            fontSize: "0.875rem",
            fontWeight: "bold",
            margin: `0 auto 0 auto`,
          }}
        >
          NOT FOR REAL WORLD USE
        </Typography>
        {/* </div> */}
      </div>
      <Map
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        zoomSnap={0.1}
      >
        <ChangeMapZoom coords={center} zoom={zoom} />
        <InsertMaptiler/>

        <Geojson
          key={JSON.stringify(baseMap)}
          data={baseMap}
          style={{ weight: 1 }}
          interactive={false}
        />

        {/* <Sectors sectors={sectors} region={region} /> */}
        <ChpSectors sectors={sectors} region={chpOps} />
        <ShdSectors sectors={sectors} region={shdOps} />
        <MtvSectors sectors={sectors} region={mtvOps} />
        <JrvSectors sectors={sectors} region={jrvOps} />

        <Tooltips
          sectors={sectors}
          region={{ chpOps, shdOps, mtvOps, jrvOps }}
        />
      </Map>
    </div>
  );
}
