import * as React from "react";
import { useRef, useEffect, useState } from "react";
import {
  useMap,
} from "react-leaflet";

const ChangeMapZoom = ({coords, zoom}) => {
  const map = useMap();
  map.setView(coords, zoom);
};

export default ChangeMapZoom;
