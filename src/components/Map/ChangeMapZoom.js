import * as React from "react";
import { useRef, useEffect, useState } from "react";
import {
  useMap,
} from "react-leaflet";

const ChangeMapZoom = ({coords, zoom, setMapAutoPan}) => {
  const map = useMap();
  map.setView(coords, zoom);
  setMapAutoPan(false);
};

export default ChangeMapZoom;
