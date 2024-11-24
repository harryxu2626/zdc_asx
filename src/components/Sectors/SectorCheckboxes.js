import * as React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  InputLabel,
  MenuItem,
  CircularProgress,
} from "@mui/material";

const PctRegion = ({ setSectors, sectors }) => {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showBUFFR}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showBUFFR: !prev.showBUFFR,
              }))
            }
            style={{ color: "#9e0059" }}
          />
        }
        label="BUFFR"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showDCAFR}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showDCAFR: !prev.showDCAFR,
              }))
            }
            style={{ color: "#ff6b6b" }}
          />
        }
        label="DCAFR"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showKRANT}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showKRANT: !prev.showKRANT,
              }))
            }
            style={{ color: "#f8961e" }}
          />
        }
        label="KRANT"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showLURAY}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showLURAY: !prev.showLURAY,
              }))
            }
            style={{ color: "#f9c74f" }}
          />
        }
        label="LURAY"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showOJAAY}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showOJAAY: !prev.showOJAAY,
              }))
            }
            style={{ color: "#90be6d" }}
          />
        }
        label="OJAAY"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showTYSON}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showTYSON: !prev.showTYSON,
              }))
            }
            style={{ color: "#43aa8b" }}
          />
        }
        label="TYSON"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showWOOLY}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showWOOLY: !prev.showWOOLY,
              }))
            }
            style={{ color: "#577590" }}
          />
        }
        label="WOOLY"
      />
    </>
  );
};

const EastChpRegion = ({ setSectors, sectors }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // console.log(sectors);
    if (typeof sectors === "undefined") {
      console.log("undef");
    } else {
      setLoading(false);
    }
  }, [sectors]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "#9e0059" }}
                checked={sectors.showBUFFR}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showBUFFR: !prev.showBUFFR,
                  }))
                }
              />
            }
            label="BUFFR"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={sectors.showBWIFS}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showBWIFS: !prev.showBWIFS,
                  }))
                }
                style={{ color: "#ff6b6b" }}
              />
            }
            label="BWIFS EAST"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={sectors.showGRACO}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showGRACO: !prev.showGRACO,
                  }))
                }
                style={{ color: "#f8961e" }}
              />
            }
            label="GRACO EAST"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={sectors.showWOOLY}
                onClick={() =>
                  setSectors((prev) => ({
                    ...prev,
                    showWOOLY: !prev.showWOOLY,
                  }))
                }
                style={{ color: "#f9c74f" }}
              />
            }
            label="WOOLY EAST"
          />
        </>
      )}
    </>
  );
};

const WestChpRegion = ({ setSectors, sectors }) => {
  // const [chpSectors,setChpSectors] = React.useState({});

  // React.useEffect(()=>{
  //     setChpSectors(sectors);
  // },[sectors])
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showBUFFR}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showBUFFR: !prev.showBUFFR,
              }))
            }
            style={{ color: "#9e0059" }}
          />
        }
        label="BUFFR"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showBWIFS}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showBWIFS: !prev.showBWIFS,
              }))
            }
            style={{ color: "#ff6b6b" }}
          />
        }
        label="BWIFS WEST"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showGRACO}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showGRACO: !prev.showGRACO,
              }))
            }
            style={{ color: "#f8961e" }}
          />
        }
        label="GRACO WEST"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showWOOLY}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showWOOLY: !prev.showWOOLY,
              }))
            }
            style={{ color: "#f9c74f" }}
          />
        }
        label="WOOLY WEST"
      />
    </>
  );
};

const NorthShdRegion = ({ setSectors, sectors }) => {
  // const [chpSectors,setChpSectors] = React.useState({});

  // React.useEffect(()=>{
  //     setChpSectors(sectors);
  // },[sectors])
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showASPER}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showASPER: !prev.showASPER,
              }))
            }
            style={{ color: "#9e0059" }}
          />
        }
        label="ASPER NORTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showBARIN}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showBARIN: !prev.showBARIN,
              }))
            }
            style={{ color: "#ff6b6b" }}
          />
        }
        label="BARIN NORTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showIADFE}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showIADFE: !prev.showIADFE,
              }))
            }
            style={{ color: "#f8961e" }}
          />
        }
        label="IADFE NORTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showIADFW}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showIADFW: !prev.showIADFW,
              }))
            }
            style={{ color: "#f9c74f" }}
          />
        }
        label="IADFW NORTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showMANNE}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showMANNE: !prev.showMANNE,
              }))
            }
            style={{ color: "#90be6d" }}
          />
        }
        label="MANNE NORTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showMULRR}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showMULRR: !prev.showMULRR,
              }))
            }
            style={{ color: "#43aa8b" }}
          />
        }
        label="MULRR NORTH"
      />
    </>
  );
};

const SouthShdRegion = ({ setSectors, sectors }) => {
  // const [chpSectors,setChpSectors] = React.useState({});

  // React.useEffect(()=>{
  //     setChpSectors(sectors);
  // },[sectors])
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showASPER}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showASPER: !prev.showASPER,
              }))
            }
            style={{ color: "#9e0059" }}
          />
        }
        label="ASPER SOUTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showBARIN}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showBARIN: !prev.showBARIN,
              }))
            }
            style={{ color: "#ff6b6b" }}
          />
        }
        label="BARIN SOUTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showIADFE}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showIADFE: !prev.showIADFE,
              }))
            }
            style={{ color: "#f8961e" }}
          />
        }
        label="IADFE SOUTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showIADFW}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showIADFW: !prev.showIADFW,
              }))
            }
            style={{ color: "#f9c74f" }}
          />
        }
        label="IADFW SOUTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showMANNE}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showMANNE: !prev.showMANNE,
              }))
            }
            style={{ color: "#90be6d" }}
          />
        }
        label="MANNE SOUTH"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={sectors.showMULRR}
            onClick={() =>
              setSectors((prev) => ({
                ...prev,
                showMULRR: !prev.showMULRR,
              }))
            }
            style={{ color: "#43aa8b" }}
          />
        }
        label="MULRR SOUTH"
      />
    </>
  );
};

const SectorCheckboxes = ({ setSectors, region, sectors }) => {
  // console.log(region);
  // console.log(sectors);
  switch (region) {
    case "CHP_EAST":
      return <EastChpRegion setSectors={setSectors} sectors={sectors} />;
    case "CHP_WEST":
      return <WestChpRegion setSectors={setSectors} sectors={sectors} />;
    case "SHD_NORTH":
      return <NorthShdRegion setSectors={setSectors} sectors={sectors} />;
    case "SHD_SOUTH":
      return <SouthShdRegion setSectors={setSectors} sectors={sectors} />;
    default:
      return <PctRegion setSectors={setSectors} sectors={sectors} />;
  }
  // return (
  //   <>
  //     {region === "CHP_EAST" || region === "CHP_WEST" ? (
  //       <ChpRegion setSectors={setSectors} region={region} sector={sectors} />
  //     ) : (
  //       <PctRegion setSectors={setSectors} />
  //     )}
  //   </>
  // );
};

export default SectorCheckboxes;
