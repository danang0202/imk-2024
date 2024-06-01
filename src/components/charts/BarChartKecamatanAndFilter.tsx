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
  const [show, setShow] = useState<boolean>(false);
  const [showIsVertical, setShowIsVertical] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<TypeData | undefined>({
    name: "Skala Usaha",
    slug: "skala",
  });
  const [isVertical, setIsVertical] = useState<TypeData>({
    name: "Vertikal",
    slug: "vertical",
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
        <div className="flex flex-row justify-between pb-6 gap-4">
          <p className="font-semibold text-lg text-wrap pl-4">
            Grafik Batang Jumlah UMKM Berdasarkan Kecamatan dan{" "}
            {selectedFilter?.name}
          </p>
          <div className="box flex flex-row gap-4">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-nowrap"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setShow(!show)}
                >
                  {selectedFilter?.name}
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  !show && "hidden"
                } absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="" role="none">
                  {filter.map((item, index) => (
                    <p
                      key={index}
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-silver cursor-pointer transition duration-300  hover:text-black"
                      role="menuitem"
                      onClick={() => {
                        setSelectedFilter(item);
                        setShow(false);
                      }}
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* filter vertikal */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setShowIsVertical(!showIsVertical)}
                >
                  {isVertical?.name}
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  !showIsVertical && "hidden"
                } absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="" role="none">
                  {isVerticalData.map((item: TypeData, index: number) => (
                    <p
                      key={index}
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-silver cursor-pointer transition duration-300  hover:text-black"
                      role="menuitem"
                      onClick={() => {
                        setIsVertical(item);
                        setShowIsVertical(false);
                      }}
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <BarChart
          h={data?.length * 45}
          data={data ? data : []}
          dataKey="kecamatan"
          type="stacked"
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
