import { BarChart } from "@mantine/charts";
import { useEffect, useState } from "react";
import {
  chartKecamatanAndBadanHukum,
  chartKecamatanAndDinasPengampu,
  chartKecamatanAndSkalaUsahaSeries,
  getStackedChartData,
  seriesType,
} from "../../utils/chart-utils";
import {
  EXTENDEDCOLORS,
  EXTENDED_WINDOW,
  badanHukumUsaha,
  dinasPengampu,
  kecamatanKulonProgo,
  skalaUsaha,
  umkmData,
} from "../../DataBuilder";
import { IconSquareFilled } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { TypeData } from "../table/Selection";
import DownloadChartButton from "../commons/DownloadChartButton";
import FilterChartSelection from "./FilterChartSelection";
import { useThemeContext } from "../../layout/ThemeContext";
const BarChartKecamatanAndFilter = () => {

  const { stat: s, common: c } = useThemeContext();
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

  const stackedFilterData: TypeData[] = [
    {
      name: "Stacked",
      slug: "stacked",
    },
    {
      name: "Normal",
      slug: "normal",
    },
  ];
  const { windowWidth, theme } = useThemeContext();

  const [show, setShow] = useState<boolean>(false);
  const [showIsVertical, setShowIsVertical] = useState<boolean>(false);
  const [showStackedFilter, setShowStackedFilter] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<TypeData>({
    name: "Badan Hukum",
    slug: "badanHukum",
  });
  const [isVertical, setIsVertical] = useState<TypeData>({
    name: `${windowWidth < EXTENDED_WINDOW.md ? "Vertikal" : "Horizontal"}`,
    slug: `${windowWidth < EXTENDED_WINDOW.md ? "vertical" : "horizontal"}`,
  });
  const [stackedFilter, setStackedFilter] = useState<TypeData>({
    name: `${windowWidth < EXTENDED_WINDOW.md ? "Stacked" : "Normal"}`,
    slug: `${windowWidth < EXTENDED_WINDOW.md ? "stacked" : "normal"}`,
  });
  const [series, setSeries] = useState<seriesType[]>(
    chartKecamatanAndSkalaUsahaSeries
  );
  const [data, setData] = useState(
    getStackedChartData(umkmData, kecamatanKulonProgo, skalaUsaha)
  );

  useEffect(() => {
    if (selectedFilter?.slug == "skala") {
      setData(getStackedChartData(umkmData, kecamatanKulonProgo, skalaUsaha));
      setSeries(chartKecamatanAndSkalaUsahaSeries);
    } else if (selectedFilter?.slug == "badanHukum") {
      setData(
        getStackedChartData(umkmData, kecamatanKulonProgo, badanHukumUsaha)
      );
      setSeries(chartKecamatanAndBadanHukum);
    } else if (selectedFilter?.slug == "dinasPengampu") {
      setData(
        getStackedChartData(umkmData, kecamatanKulonProgo, dinasPengampu)
      );
      setSeries(chartKecamatanAndDinasPengampu);
    }
  }, [selectedFilter]);

  const getCartHeight = () => {
    const result =
      isVertical.slug === "vertical"
        ? stackedFilter.slug == "stacked"
          ? data?.length * 45
          : data?.length * 100
        : 450;
    if (result < 550) {
      return 450;
    } else {
      return result;
    }
  };
  return (
    <>
      <div className="w-full xl:px-6">
        <div className="flex flex-col justify-center pb-2 gap-2 items-center">
          <div className="box flex w-full flex-wrap justify-end gap-2 md:gap-4 curosr-pointer items-center">
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
            <FilterChartSelection
              show={showStackedFilter}
              setShow={setShowStackedFilter}
              filterList={stackedFilterData}
              selectedFilter={stackedFilter}
              setSelectedFilter={setStackedFilter}
            />
            <DownloadChartButton
              chartTitle={`${s("titleChart5")} ${c(`thead_umkm_${selectedFilter?.slug}`)}`}
            />
          </div>
          <p className="font-semibold text-sm md:text-base text-wrap text-center md:text-start pb-4">
            {s("titleChart5")} 
            {c(`thead_umkm_${selectedFilter?.slug}`)}
          </p>
        </div>
        <BarChart
          h={getCartHeight()}
          data={data ? data : []}
          dataKey="kecamatan"
          type={stackedFilter.slug === "stacked" ? "stacked" : "default"}
          barProps={{
            barSize: stackedFilter.slug === "stacked" ? 30 : 25,
            label: {
              position: isVertical.slug == 'vertical' ? "insideRight" : "top",
              fill: theme == "dark" ? "#fff" : "#000",
              fontSize: 12,
              textAnchor: "middle",
              dx: isVertical.slug == "vertical" ? 20 : 0,
            },
          }}
          withTooltip
          yAxisLabel={isVertical.slug === "vertical" ? "" : "Jumlah"}
          xAxisLabel={isVertical.slug === "vertical" ? "Jumlah" : ""}
          tooltipAnimationDuration={200}
          orientation={
            isVertical.slug === "vertical" ? "vertical" : "horizontal"
          }
          yAxisProps={{
            width: 70,
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
          gridAxis={isVertical.slug === "vertical" ? "y" : "x"}
          series={series}
        />

        <div className="flex flex-wrap gap-4 w-full justify-center items-center pt-4">
          {series?.map((item, index) => (
            <div className="box flex flex-row gap-2 items-center" key={index}>
              <IconSquareFilled size={16} color={item.color} />
              <Text
                size="xs"
                c={
                  item.color == EXTENDEDCOLORS.accent6
                    ? EXTENDEDCOLORS.grey
                    : item.color
                }
                fw={500}
              >
                {c(item.label).toUpperCase()}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarChartKecamatanAndFilter;
