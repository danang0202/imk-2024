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
const BarChartKecamatanAndFilter = () => {
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

  const [show, setShow] = useState<boolean>(false);
  const [showIsVertical, setShowIsVertical] = useState<boolean>(false);
  const [showStackedFilter, setShowStackedFilter] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<TypeData>({
    name: "Badan Hukum",
    slug: "badanHukum",
  });
  const [isVertical, setIsVertical] = useState<TypeData>({
    name: "Horizontal",
    slug: "horizontal",
  });
  const [stackedFilter, setStackedFilter] = useState<TypeData>({
    name: "Normal",
    slug: "normal",
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
  return (
    <>
      <div className="w-full px-6">
        <div className="flex flex-row justify-between pb-6 gap-4 items-center">
          <p className="font-semibold text-lg text-wrap pl-4">
            Grafik Batang Jumlah UMKM Berdasarkan Kecamatan dan{" "}
            {selectedFilter?.name}
          </p>
          <div className="box flex flex-row gap-4">
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
              chartTitle={`Grafik Batang Jumlah UMKM Berdasarkan Kecamatan dan ${selectedFilter?.name}
`}
            />
          </div>
        </div>
        <BarChart
          h={isVertical.slug == "vertical" ? data?.length * 55 : 450}
          data={data ? data : []}
          dataKey="kecamatan"
          type={stackedFilter.slug == "stacked" ? "stacked" : "default"}
          barProps={{ barSize: 20 }}
          withTooltip
          yAxisLabel={isVertical.slug == "vertical" ? "" : "Jumlah"}
          xAxisLabel={isVertical.slug == "vertical" ? "Jumlah" : ""}
          tooltipAnimationDuration={200}
          orientation={
            isVertical.slug == "vertical" ? "vertical" : "horizontal"
          }
          gridAxis={isVertical.slug == "vertical" ? "y" : "x"}
          series={series}
        />
        <div className="flex flex flex-wrap gap-8 w-full justify-center items-center pt-4">
          {series?.map((item) => (
            <div className="box flex flex-row gap-2 items-center">
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
                {item.label.toUpperCase()}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarChartKecamatanAndFilter;
