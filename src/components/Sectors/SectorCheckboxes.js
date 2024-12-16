import * as React from "react";
import { FormControlLabel, Checkbox, CircularProgress } from "@mui/material";
import {chpPalette, shdPalette, mtvPalette, jrvPalette} from "src/data/palette";









// const generateSectorCheckboxes = (pctSector, setSectors, sectors) => {
//   // console.log(pctSector.map((item)=>console.log(item.label)))
//   // sectors["show" + pctSector[0].label.substring(0, 5).toUpperCase()]=!sectors["show" + pctSector[0].label.substring(0, 5).toUpperCase()]
//   // console.log(sectors["show" + pctSector[0].label.substring(0, 5).toUpperCase()])
//   const handleClick = (item) => {
//     console.log(sectors["show" + item.label.substring(0, 5).toUpperCase()])
//     sectors["show" + item.label.substring(0, 5).toUpperCase()] = !sectors["show" + item.label.substring(0, 5).toUpperCase()];
//     console.log(sectors["show" + item.label.substring(0, 5).toUpperCase()])
//     setSectors(sectors)
//   }
//   return (
//     <>
//       {pctSector.map((item) => (
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={
//                 sectors["show" + item.label.substring(0, 5).toUpperCase()]
//               }
//               onClick={handleClick(item)}
//               style={{ color: "#9e0059" }}
//             />
//           }
//           label={item.label}
//         />
//         // <h1>{item.label}</h1>
//       ))}
//     </>
//   );
// };
// const SectorCheckboxes = ({ setSectors, region, sectors }) => {
//   // console.log(region);
//   // console.log(sectors);
//   switch (region) {
//     case "CHP_EAST":
//       return <EastChpRegion setSectors={setSectors} sectors={sectors} />;
//     // return generateSectorCheckboxes(
//     //   sectorCheckboxList.chpSectors,
//     //   setSectors,
//     //   sectors
//     // );
//     case "CHP_WEST":
//       return <WestChpRegion setSectors={setSectors} sectors={sectors} />;
//     case "SHD_NORTH":
//       return <NorthShdRegion setSectors={setSectors} sectors={sectors} />;
//     case "SHD_SOUTH":
//       return <SouthShdRegion setSectors={setSectors} sectors={sectors} />;
//     case "MTV_NORTH":
//       return <NorthMtvRegion setSectors={setSectors} sectors={sectors} />;
//     case "MTV_SOUTH":
//       return <SouthMtvRegion setSectors={setSectors} sectors={sectors} />;
//     case "JRV_NORTH":
//       return <NorthJrvRegion setSectors={setSectors} sectors={sectors} />;
//     case "JRV_SOUTH":
//       return <SouthJrvRegion setSectors={setSectors} sectors={sectors} />;
//   }
//   // return (
//   //   <>
//   //     {region === "CHP_EAST" || region === "CHP_WEST" ? (
//   //       <ChpRegion setSectors={setSectors} region={region} sector={sectors} />
//   //     ) : (
//   //       <PctRegion setSectors={setSectors} />
//   //     )}
//   //   </>
//   // );
// };

export function chpCheckboxes(setSectors, region, sectors) {
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
                  style={{ color: chpPalette[0] }}
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
                  style={{ color: chpPalette[1] }}
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
                  style={{ color: chpPalette[2] }}
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
                  style={{ color: chpPalette[3] }}
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
              style={{ color: chpPalette[0] }}
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
              style={{ color: chpPalette[1] }}
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
              style={{ color: chpPalette[2] }}
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
              style={{ color: chpPalette[3] }}
            />
          }
          label="WOOLY WEST"
        />
      </>
    );
  };
  switch (region) {
    case "CHP_EAST":
      return <EastChpRegion setSectors={setSectors} sectors={sectors} />;
    // return generateSectorCheckboxes(
    //   sectorCheckboxList.chpSectors,
    //   setSectors,
    //   sectors
    // );
    case "CHP_WEST":
      return <WestChpRegion setSectors={setSectors} sectors={sectors} />;
  }
}

export function shdCheckboxes(setSectors, region, sectors) {
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
              style={{ color: shdPalette[0] }}
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
              style={{ color: shdPalette[1] }}
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
              style={{ color: shdPalette[2] }}
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
              style={{ color: shdPalette[3] }}
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
              style={{ color: shdPalette[4] }}
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
              style={{ color: shdPalette[5] }}
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
              style={{ color: shdPalette[0] }}
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
              style={{ color: shdPalette[1] }}
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
              style={{ color: shdPalette[2] }}
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
              style={{ color: shdPalette[3] }}
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
              style={{ color: shdPalette[4] }}
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
              style={{ color: shdPalette[5] }}
            />
          }
          label="MULRR SOUTH"
        />
      </>
    );
  };
  switch (region) {
    case "CHP_EAST":
    case "SHD_NORTH":
      return <NorthShdRegion setSectors={setSectors} sectors={sectors} />;
    case "SHD_SOUTH":
      return <SouthShdRegion setSectors={setSectors} sectors={sectors} />;
  }
}

export function mtvCheckboxes(setSectors, region, sectors) {
  const NorthMtvRegion = ({ setSectors, sectors }) => {
    // const [chpSectors,setChpSectors] = React.useState({});
  
    // React.useEffect(()=>{
    //     setChpSectors(sectors);
    // },[sectors])
    return (
      <>
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
              style={{ color: mtvPalette[0] }}
            />
          }
          label="DCAFR NORTH"
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
              style={{ color: mtvPalette[1] }}
            />
          }
          label="KRANT NORTH"
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
              style={{ color: mtvPalette[2] }}
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
              style={{ color: mtvPalette[3] }}
            />
          }
          label="OJAAY NORTH"
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
              style={{ color: mtvPalette[4] }}
            />
          }
          label="TYSON NORTH"
        />
      </>
    );
  };
  
  const SouthMtvRegion = ({ setSectors, sectors }) => {
    // const [chpSectors,setChpSectors] = React.useState({});
  
    // React.useEffect(()=>{
    //     setChpSectors(sectors);
    // },[sectors])
    return (
      <>
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
              style={{ color: mtvPalette[0] }}
            />
          }
          label="DCAFR SOUTH"
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
              style={{ color: mtvPalette[1] }}
            />
          }
          label="KRANT SOUTH"
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
              style={{ color: mtvPalette[2] }}
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
              style={{ color: mtvPalette[3] }}
            />
          }
          label="OJAAY SOUTH"
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
              style={{ color: mtvPalette[4] }}
            />
          }
          label="TYSON SOUTH"
        />
      </>
    );
  };

  switch (region) {
    case "MTV_NORTH":
      return <NorthMtvRegion setSectors={setSectors} sectors={sectors} />;
    case "MTV_SOUTH":
      return <SouthMtvRegion setSectors={setSectors} sectors={sectors} />;
  }
}

export function jrvCheckboxes(setSectors, region, sectors) {
  const NorthJrvRegion = ({ setSectors, sectors }) => {
    return (
      <>
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCHOEA}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCHOEA: !prev.showCHOEA,
                }))
              }
              style={{ color: jrvPalette[0] }}
            />
          }
          label="CHOEA"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCHOWE}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCHOWE: !prev.showCHOWE,
                }))
              }
              style={{ color: jrvPalette[1] }}
            />
          }
          label="CHOWE"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCSIDE}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCSIDE: !prev.showCSIDE,
                }))
              }
              style={{ color: jrvPalette[2] }}
            />
          }
          label="CSIDE"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCSIDW}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCSIDW: !prev.showCSIDW,
                }))
              }
              style={{ color: jrvPalette[3] }}
            />
          }
          label="CSIDW"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showFLTRK}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showFLTRK: !prev.showFLTRK,
                }))
              }
              style={{ color: jrvPalette[4] }}
            />
          }
          label="FLTRK NORTH"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showRICFR}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showRICFR: !prev.showRICFR,
                }))
              }
              style={{ color: jrvPalette[5] }}
            />
          }
          label="RICFR NORTH"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showTAPPA}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showTAPPA: !prev.showTAPPA,
                }))
              }
              style={{ color: jrvPalette[6] }}
            />
          }
          label="TAPPA NORTH"
        />
      </>
    );
  };
  
  const SouthJrvRegion = ({ setSectors, sectors }) => {
    return (
      <>
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCHOEA}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCHOEA: !prev.showCHOEA,
                }))
              }
              style={{ color: jrvPalette[0] }}
            />
          }
          label="CHOEA"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCHOWE}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCHOWE: !prev.showCHOWE,
                }))
              }
              style={{ color: jrvPalette[1] }}
            />
          }
          label="CHOWE"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCSIDE}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCSIDE: !prev.showCSIDE,
                }))
              }
              style={{ color: jrvPalette[2] }}
            />
          }
          label="CSIDE"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showCSIDW}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showCSIDW: !prev.showCSIDW,
                }))
              }
              style={{ color: jrvPalette[3] }}
            />
          }
          label="CSIDW"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showFLTRK}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showFLTRK: !prev.showFLTRK,
                }))
              }
              style={{ color: jrvPalette[4] }}
            />
          }
          label="FLTRK SOUTH"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showRICFR}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showRICFR: !prev.showRICFR,
                }))
              }
              style={{ color: jrvPalette[5] }}
            />
          }
          label="RICFR SOUTH"
        />
  
        <FormControlLabel
          control={
            <Checkbox
              checked={sectors.showTAPPA}
              onClick={() =>
                setSectors((prev) => ({
                  ...prev,
                  showTAPPA: !prev.showTAPPA,
                }))
              }
              style={{ color: jrvPalette[6] }}
            />
          }
          label="TAPPA SOUTH"
        />
      </>
    );
  };

  switch (region) {
    case "JRV_NORTH":
      return <NorthJrvRegion setSectors={setSectors} sectors={sectors} />;
    case "JRV_SOUTH":
      return <SouthJrvRegion setSectors={setSectors} sectors={sectors} />;
  }
}
