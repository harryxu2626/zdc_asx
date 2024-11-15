import Head from 'next/head';

import * as React from "react"
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import Geojson from "@components/GeoJSON"
import Sectors from "@components/Sectors"
import Tooltips from "@components/Tooltips"
import SectorCheckboxes from '@components/Sectors/SectorCheckboxes';

import styles from '@styles/Home.module.scss';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
  Typography
} from "@mui/material";

const DEFAULT_CENTER = [38.907132, -77.036546]

import southPCT from "../../public/skinny.json";
import northPCT from "../../public/northMerged.json";



// import logo from "../../public/logo.png";

export default function Home() {

  const [baseMap, setBaseMap] = React.useState(southPCT);
  const [region, setRegion] = React.useState('SHD');
  const [layers, setLayers] = React.useState([]);
  const [sectors, setSectors] = React.useState({
    showBUFFR: false,
    showDCAFR: false,
    showKRANT: false,
    showLURAY: false,
    showOJAAY: false,
    showTYSON: false,
    showWOOLY: false,
    showBWIFS: false,
    showGRACO: false,
  });
  

  const handleMapSelectChange = (event) => {
    setBaseMap(event.target.value)
   

    }

  const handlePCTRegionChange = (event) => {
      // Object.keys(sectors).forEach(v => sectors[v] = false)

      setRegion(event.target.value);
  }

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
            <MenuItem value={northPCT}>North PCT</MenuItem>
            <MenuItem value={southPCT}>South PCT</MenuItem>
          </Select>
          <Typography>Sector Maps</Typography>
          <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
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
            <MenuItem value={"SHD"}>SHD</MenuItem>
            <MenuItem value={"CHP_EAST"}>CHP East</MenuItem>
            <MenuItem value={"CHP_WEST"}>CHP West</MenuItem>
          </Select>

          <SectorCheckboxes setSectors={setSectors} region={region} sectors={sectors}/>

         
        </FormGroup>
      </div>
      <Map
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          zoom={9.5}
          zoomSnap={0.5}
          center={[39, -77]}
        >
          <Geojson
            key={JSON.stringify(baseMap)}
            data={baseMap}
            style={{ weight: 1 }}
            interactive={false}
          />

          <Sectors sectors={sectors} region={region}/>
          <Tooltips sectors={sectors} region={region}/>
        </Map>

    </div>
  );


}
