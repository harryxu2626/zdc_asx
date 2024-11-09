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

import styles from '@styles/Home.module.scss';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

const DEFAULT_CENTER = [38.907132, -77.036546]

import southPCT from "../../public/skinny.json";
import northPCT from "../../public/northMerged.json";



import logo from "../../public/logo.png";

export default function Home() {

  const [baseMap, setBaseMap] = React.useState(southPCT);
  const [layers, setLayers] = React.useState([]);
  const [sectors, setSectors] = React.useState({
    showBUFFR: false,
    showDCAFR: false,
    showKRANT: false,
    showLURAY: false,
    showOJAAY: false,
    showTYSON: false,
    showWOOLY: false,
  });

  const handleMapSelectChange = (event) => {
    setBaseMap(event.target.value);
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
        }}
      >
        <FormGroup style={{ color: "#fff" }}>
          <img
            alt="Washington ARTCC Logo"
            width="215"
            height="39"
            style={{ color: "transparent", margin: "1rem" }}
            src="/logo.png"
          />
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

          <FormControlLabel
            control={
              <Checkbox
                value={"BUFFR"}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showBUFFR: !prev.showBUFFR,
                  }))
                }
                style={{ color: "#ac2a2f" }}
              />
            }
            label="BUFFR"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"DCAFR"}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showDCAFR: !prev.showDCAFR,
                  }))
                }
                style={{ color: "#ac2a2f" }}
              />
            }
            label="DCAFR"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"KRANT"}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showKRANT: !prev.showKRANT,
                  }))
                }
                style={{ color: "#ac2a2f" }}
              />
            }
            label="KRANT"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"LURAY"}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showLURAY: !prev.showLURAY,
                  }))
                }
                style={{ color: "#ac2a2f" }}
              />
            }
            label="LURAY"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"OJAAY"}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showOJAAY: !prev.showOJAAY,
                  }))
                }
                style={{ color: "#ac2a2f" }}
              />
            }
            label="OJAAY"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"TYSON"}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showTYSON: !prev.showTYSON,
                  }))
                }
                style={{ color: "#ac2a2f" }}
              />
            }
            label="TYSON"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"WOOLY"}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showWOOLY: !prev.showWOOLY,
                  }))
                }
                style={{ color: "#ac2a2f" }}
              />
            }
            label="WOOLY"
          />
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

          <Sectors sectors={sectors} />
          <Tooltips sectors={sectors} />
        </Map>

    </div>
  );


}
