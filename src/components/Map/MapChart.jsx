import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1500
      }}style={{width:'100%', height:'100%'}}
    >
      <Geographies
        geography="/Portfolio/features.json"
        fill="#440b3b"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[6.5652,51.3345 ]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Krefeld"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;