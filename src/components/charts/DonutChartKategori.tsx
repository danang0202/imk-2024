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
    name: "Badan Hukum",
    slug: "badanHukum",
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

  const { windowWidth, theme, stat: s, common: c } = useThemeContext();
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center pb-2 gap-2 items-center">
        <div className="flex flex-row justify-end  gap-2 md:gap-4 w-full ">
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
            chartTitle={`${s("titleChart3")} ${c(`thead_umkm_${selectedFilter.slug}`)}`}
          />
        </div>
        <p className="font-semibold text-sm md:text-base text-wrap text-center">
          {s("titleChart3")} {c(`thead_umkm_${selectedFilter.slug}`)}
        </p>
      </div>
      <div className="flex justify-center w-full">
        <DonutChart
          labelColor={theme == "dark" ? "white" : "black"}
          withLabelsLine
          withLabels
          data={data || []}
          size={windowWidth < EXTENDED_WINDOW.md ? 200 : 250}
          tooltipDataSource="segment"
          thickness={30}
        />
      </div>
      <div className="flex  flex-wrap gap-4 w-full justify-center items-center pt-4">
        {data?.map((item, index) => (
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
              {c(item.name).toUpperCase()}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChartKategori;
