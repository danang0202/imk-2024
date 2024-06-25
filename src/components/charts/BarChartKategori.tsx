import { useEffect, useState } from "react";
import { TypeData } from "../table/Selection";
import { BarChart } from "@mantine/charts";
import {
  EXTENDEDCOLORS,
  EXTENDED_WINDOW,
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
  umkmData,
} from "../../DataBuilder";
import { getDataCountPerCategory } from "../../utils/chart-utils";
import { ColorInput } from "@mantine/core";
import DownloadChartButton from "../commons/DownloadChartButton";
import FilterChartSelection from "./FilterChartSelection";
import { useThemeContext } from "../../layout/ThemeContext";
import SkeletonChart from "../commons/SkeletonChart";
const BarChartKategori = () => {
  const getCartHeight = () => {
    const result = data.length * 50;
    if (result < 400) {
      return 400;
    } else {
      return result;
    }
  };

  const filter: TypeData[] = [
    {
      name: "Skala Usaha",
      slug: "skala",
    },
    {
      name: "Badan Hukum",
      slug: "badanHukum",
    },
    {
      name: "Dinas Pengampu",
      slug: "dinasPengampu",
    },
    {
      name: "Bidang Usaha",
      slug: "bidangUsaha",
    },
  ];

  const isVerticalData: TypeData[] = [
    {
      name: "Vertikal",
      slug: "vertical",
    },
    {
      name: "Horizontal",
      slug: "horizontal",
    },
  ];
  const [show, setShow] = useState<boolean>(false);
  const [colorChart, setColorChart] = useState<string>(EXTENDEDCOLORS.blueChart);
  const [showIsVertical, setShowIsVertical] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<TypeData>({
    name: "Badan Hukum",
    slug: "badanHukum",
  });
  const [isVertical, setIsVertical] = useState<TypeData>({
    name: "Vertikal",
    slug: "vertical",
  });

  const [data, setData] = useState(
    getDataCountPerCategory(umkmData, skalaUsaha)
  );

  const { windowWidth, theme, stat: s, common: c } = useThemeContext();

  useEffect(() => {
    if (selectedFilter?.slug == "skala") {
      setData(getDataCountPerCategory(umkmData, skalaUsaha));
    } else if (selectedFilter?.slug == "badanHukum") {
      setData(getDataCountPerCategory(umkmData, badanHukumUsaha));
    } else if (selectedFilter?.slug == "dinasPengampu") {
      setData(getDataCountPerCategory(umkmData, dinasPengampu));
    } else if (selectedFilter?.slug == "bidangUsaha") {
      setData(getDataCountPerCategory(umkmData, bidangUsaha));
    }
    setShow(false);
  }, [selectedFilter]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }),
    [];

  return (
    <div className="w-full xl:px-6">
      {isLoaded ? (
        <>
          <div className="flex flex-col  justify-center md:justify-between pb-2 gap-2 items-center">
            <div className="box w-full flex flex-wrap justify-end gap-2 md:gap-4 curosr-pointer items-center">
              <ColorInput
                pointer={true}
                value={colorChart}
                onChange={setColorChart}
                format="hex"
                w={"10rem"}
                swatches={[
                  EXTENDEDCOLORS.accent2,
                  EXTENDEDCOLORS.accent3,
                  EXTENDEDCOLORS.accent4,
                  EXTENDEDCOLORS.accent5,
                  EXTENDEDCOLORS.accent6,
                  EXTENDEDCOLORS.info,
                ]}
                size="xs"
              />
              <FilterChartSelection
                show={show}
                setShow={setShow}
                filterList={filter}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />

              {/* filter vertikal */}
              <FilterChartSelection
                show={showIsVertical}
                setShow={setShowIsVertical}
                filterList={isVerticalData}
                selectedFilter={isVertical}
                setSelectedFilter={setIsVertical}
              />
              <DownloadChartButton
                chartTitle={`${s("titleChart4")} ${c(`thead_umkm_${selectedFilter.slug}`)}`}
              />
            </div>
            <p className="font-semibold text-sm md:text-base text-wrap text-center md:text-start">
              {s("titleChart4")} {c(`thead_umkm_${selectedFilter.slug}`)}
            </p>
          </div>
          <BarChart
            id="bar-kategori"
            h={getCartHeight()}
            data={data}
            dataKey="name"
            barProps={{
              barSize: isVertical.slug == "vertical" ? 25 : 35, label: {
                position: isVertical.slug == 'vertical' ? "insideRight" : "top",
                fill: theme == "dark" ? "#fff" : "#000",
                fontSize: 12,
                textAnchor: "middle",
                dx: isVertical.slug == "vertical" ? 20 : 0,
              },
            }}
            withTooltip
            tooltipAnimationDuration={200}
            orientation={
              isVertical.slug == "vertical" ? "vertical" : "horizontal"
            }
            gridAxis={isVertical.slug == "vertical" ? "y" : "x"}
            withBarValueLabel
            withXAxis={true}
            yAxisProps={{
              width:
                isVertical.slug == "vertical"
                  ? windowWidth < EXTENDED_WINDOW.md
                    ? 75
                    : 100
                  : 15,
              tick: {
                fill: theme == "dark" ? "#fff" : "#000",
                fontSize: 12,
              },
            }}
            xAxisProps={{
              tick: {
                fill: theme == "dark" ? "#fff" : "#000",
                fontSize: 12,
              },
            }}
            series={[{ name: "value", color: colorChart }]}
          />
        </>
      ) : (
        <SkeletonChart />
      )}
    </div>
  );
};

export default BarChartKategori;
