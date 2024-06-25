import * as d3 from "d3";
import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import { Polygon, Feature } from "geojson";
import * as turf from "@turf/turf";
import { boundaries } from "./GeoJson";
import { numData } from "./DataFeatures";
import { ColorLegend } from "./ColorLegend";
import {
  getFilteredValue,
  getMapCenter,
  getMapScale,
  skalaUsahaFilterChloropleth,
  useDimensions,
} from "../../helper/chloropleth.helper";
import DownloadChartButton from "../commons/DownloadChartButton";
import { TypeData } from "../table/Selection";
import FilterChartSelection from "../charts/FilterChartSelection";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDED_WINDOW } from "../../DataBuilder";

interface MapProps {
  skalaFilter: TypeData;
  setSkalaFilter: Dispatch<SetStateAction<TypeData>>;
}

export const Map: FC<MapProps> = ({ skalaFilter, setSkalaFilter }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useDimensions(containerRef);
  const [show, setShow] = useState<boolean>(false);
  const { windowWidth } = useThemeContext();

  const { stat: s } = useThemeContext();

  const colorScale = d3
    .scaleThreshold<number, string>()
    .domain([5, 10, 15, 20])
    .range(d3.schemeBlues[4]);

  const colorScaleFilter = d3
    .scaleThreshold<number, string>()
    .domain([5, 10, 15])
    .range(d3.schemeBlues[3]);

  const projection = d3
    .geoMercator()
    .scale(getMapScale(windowWidth, width, height))
    .center(getMapCenter(windowWidth));
  const geoPathGenerator = d3.geoPath().projection(projection);
  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("padding", "6px")
    .style("background", "#fff")
    .style("color", "#000")
    .style("border-radius", "4px")
    .style("border", "1px solid #ccc")
    .style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)")
    .style("pointer-events", "none")
    .style("opacity", 0);

  const allSvgPaths = boundaries.map((shape) => {
    const regionData = numData.find((region) => region.code === shape.id);
    let color = regionData
      ? colorScale(getFilteredValue(regionData.value, skalaFilter.slug))
      : "white";

    if (skalaFilter.slug !== "semua") {
      color = regionData
        ? colorScaleFilter(getFilteredValue(regionData.value, skalaFilter.slug))
        : "white";
    }

    if (regionData) {
      if (getFilteredValue(regionData.value, skalaFilter.slug) == 0) {
        color = "white";
      }
    }

    const typedShape: Feature<Polygon> = {
      type: "Feature",
      geometry: shape.geometry as Polygon,
      properties: shape.properties,
    };

    const rewindedShape = turf.rewind(typedShape, {
      reverse: true,
    }) as Feature<Polygon>;

    const centroid = geoPathGenerator.centroid(rewindedShape);

    return (
      <g key={shape.id}>
        <path
          d={geoPathGenerator(rewindedShape) ?? ""}
          stroke="black"
          strokeWidth={1}
          fill={color}
          fillOpacity={1}
          className="region-path cursor-pointer transition duration-300"
          onMouseEnter={(event) => {
            tooltip.transition().duration(200).style("opacity", 1);
            const value = regionData
              ? getFilteredValue(regionData.value, skalaFilter.slug)
              : 0;
            tooltip
              .html(
                `<strong>${shape.properties.name}</strong><br />Jumlah ${skalaFilter.slug === "semua" ? "UMKM" : skalaFilter.name
                }: ${value}`
              )
              .style("left", event.pageX + 5 + "px")
              .style("top", event.pageY - 28 + "px");

            d3.selectAll(".region-path")
              .filter(function () {
                return this !== event.target;
              })
              .classed("opacity-25", true);
          }}
          onMouseMove={(event) => {
            tooltip
              .style("left", event.pageX + 5 + "px")
              .style("top", event.pageY - 28 + "px");
          }}
          onMouseLeave={() => {
            tooltip.transition().duration(500).style("opacity", 0);

            d3.selectAll(".region-path").classed("opacity-25", false);
          }}
        />
        <text
          x={centroid[0]}
          y={centroid[1]}
          textAnchor="middle"
          dy=".35em"
          style={{
            fontSize: "10px",
            fontWeight: "normal",
            fill: color === "white" ? "#000" : "#fff",
          }}
        >
          {shape.properties.name}
        </text>
      </g>
    );
  });

  return (
    <div ref={containerRef} className="w-full h-fit" id="chloropath-map">
      <div className="flex flex-col items-center  justify-between pb-2 gap-2 md:gap-2">
        <div className="flex flex-row justify-end gap-2 md:gap-4 w-full">
          <FilterChartSelection
            show={show}
            setShow={setShow}
            filterList={skalaUsahaFilterChloropleth}
            selectedFilter={skalaFilter}
            setSelectedFilter={setSkalaFilter}
          />
          <DownloadChartButton chartTitle={`${s("titleChart2")} ${skalaFilter.slug == "semua" ? "UMKM" : skalaFilter.name}`} />
        </div>
        <p className="font-semibold text-sm md:text-base text-wrap text-left">
          {s("titleChart2")}
          {skalaFilter.slug == "semua" ? "UMKM" : skalaFilter.name}
        </p>
      </div>
      <svg width={width} height={windowWidth >= EXTENDED_WINDOW.md ? 450 : 350} id="chloropath-map-svg">
        {allSvgPaths}
      </svg>
      <ColorLegend
        width={width}
        height={90}
        colorScale={skalaFilter.slug == "semua" ? colorScale : colorScaleFilter}
      />
    </div>
  );
};
