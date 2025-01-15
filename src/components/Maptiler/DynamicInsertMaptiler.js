import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import "@maptiler/leaflet-maptilersdk";

const DynamicInsertMaptiler = () => {
  const map = useMap();
  const key = 'pV3tPWLAYGjWrH4cybZl'
  L.tileLayer(`https://api.maptiler.com/maps/backdrop-dark/{z}/{x}/{y}.png?key=${key}`,{ //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    crossOrigin: true
  }).addTo(map);
};

export default DynamicInsertMaptiler;
