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

  const { windowWidth } = useThemeContext();

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
          <div className="flex flex-col xl:flex-row justify-center md:justify-between pb-6 gap-4 items-center">
            <p className="font-semibold text-sm md:text-base xl:text-lg text-wrap text-center md:text-start">
              Grafik Batang Jumlah UMKM Berdasarkan {selectedFilter?.name}
            </p>
            <div className="box flex flex-wrap justify-end gap-2 md:gap-4 curosr-pointer items-center">
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
                chartTitle={`Grafik Batang Jumlah UMKM Berdasarkan ${selectedFilter?.name}`}
              />
            </div>
          </div>
          <BarChart
            h={getCartHeight()}
            data={data}
            dataKey="name"
            barProps={{ barSize: 25 }}
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
