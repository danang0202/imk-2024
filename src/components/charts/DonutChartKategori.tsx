import { useEffect, useState } from "react";
import { TypeData } from "../table/Selection";
import { DonutChart } from "@mantine/charts";
import {
  EXTENDEDCOLORS,
  EXTENDED_WINDOW,
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
  umkmData,
} from "../../DataBuilder";
import { getDataCountPerCategoryForPieChart } from "../../utils/chart-utils";
import { IconSquareFilled } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import DownloadChartButton from "../commons/DownloadChartButton";
import FilterChartSelection from "./FilterChartSelection";
import { useThemeContext } from "../../layout/ThemeContext";

const DonutChartKategori = () => {
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

  const [show, setShow] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<TypeData>({
    name: "Skala Usaha",
    slug: "skala",
  });

  const [data, setData] = useState(
    getDataCountPerCategoryForPieChart(umkmData, skalaUsaha)
  );

  useEffect(() => {
    if (selectedFilter?.slug == "skala") {
      setData(getDataCountPerCategoryForPieChart(umkmData, skalaUsaha));
    } else if (selectedFilter?.slug == "badanHukum") {
      setData(getDataCountPerCategoryForPieChart(umkmData, badanHukumUsaha));
    } else if (selectedFilter?.slug == "dinasPengampu") {
      setData(getDataCountPerCategoryForPieChart(umkmData, dinasPengampu));
    } else if (selectedFilter?.slug == "bidangUsaha") {
      setData(getDataCountPerCategoryForPieChart(umkmData, bidangUsaha));
    }
    setShow(false);
  }, [selectedFilter]);

  const { windowWidth } = useThemeContext();
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center md:justify-between pb-6 gap-4 items-center">
        <p className="font-semibold text-sm md:text-base xl:text-lg text-wrap text-center md:text-start">
          Grafik Lingkaran Jumlah UMKM Berdasarkan {selectedFilter?.name}
        </p>
        <div className="flex flex-row justify-between  gap-2 md:gap-4 w-full md:w-fit">
          <div className="box flex flex-row gap-4">
            <FilterChartSelection
              show={show}
              setShow={setShow}
              filterList={filter}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
          <DownloadChartButton
            chartTitle={`Grafik Lingkaran Jumlah UMKM Berdasarkan ${selectedFilter?.name}`}
          />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <DonutChart
          withLabelsLine
          withLabels
          data={data || []}
          size={windowWidth < EXTENDED_WINDOW.md ? 200 : 250}
          tooltipDataSource="segment"
          thickness={30}
        />
      </div>
      <div className="flex  flex-wrap gap-4 w-full justify-center items-center pt-4">
        {data?.map((item) => (
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
              {item.name.toUpperCase()}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChartKategori;
