import {
  ComposableMap,
  Geographies,
  Geography,
} from "@vnedyalk0v/react19-simple-maps";

import countries from "world-atlas/countries-110m.json";

function RegionMap({ center, scale }) {
  return (
    <div className="region-map">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center,
          scale,
        }}
        width={500}
        height={280}
      >
        <Geographies geography={countries}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(255,255,255,0.015)"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth={0.5}
                style={{
                  default: {
                    outline: "none",
                  },
                  hover: {
                    fill: "rgba(255,255,255,0.08)",
                    stroke: "rgba(255,255,255,0.6)",
                    outline: "none",
                  },
                  pressed: {
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default RegionMap;