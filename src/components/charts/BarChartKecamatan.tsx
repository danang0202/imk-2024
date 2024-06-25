import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { TypeData } from "../table/Selection";
import { BarChart } from "@mantine/charts";
import {
  EXTENDED_WINDOW,
  kecamatanKulonProgo,
  umkmData,
} from "../../DataBuilder";
import { getDataCountKategoryPerKecamatan } from "../../utils/chart-utils";
import DownloadChartButton from "../commons/DownloadChartButton";
import FilterChartSelection from "./FilterChartSelection";
import { skalaUsahaFilterChloropleth } from "../../helper/chloropleth.helper";
import { useThemeContext } from "../../layout/ThemeContext";

interface BarChartKecamatanProps {
  skalaFilter: TypeData;
  setSkalaFilter: Dispatch<SetStateAction<TypeData>>;
}

const BarChartKecamatan: FC<BarChartKecamatanProps> = ({
  skalaFilter,
  setSkalaFilter,
}) => {
  const { windowWidth } = useThemeContext();
  const getCartHeight = () => {
    const result = data.length * 50;
    if (windowWidth >= EXTENDED_WINDOW.md) {
      if (result < 510) {
        return 500;
      } else {
        return result;
      }
    } else {
      return result;
    }
  };

  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState(
    getDataCountKategoryPerKecamatan(umkmData, kecamatanKulonProgo, skalaFilter)
  );
  const { theme, stat: s, common: c } = useThemeContext();

  useEffect(() => {
    setData(
      getDataCountKategoryPerKecamatan(
        umkmData,
        kecamatanKulonProgo,
        skalaFilter
      )
    );
  }, [skalaFilter]);
  return (
    <div className="w-full xl:px-6">
      <>
        <div className="flex flex-col justify-center md:justify-between pb-2 gap-2 items-center">
          <div className="box flex flex-wrap w-full justify-end gap-2 md:gap-4 curosr-pointer items-center">
            <FilterChartSelection
              show={show}
              setShow={setShow}
              filterList={skalaUsahaFilterChloropleth}
              selectedFilter={skalaFilter}
              setSelectedFilter={setSkalaFilter}
            />
            <DownloadChartButton
              chartTitle={`${s('titleChart1_1')} ${skalaFilter?.slug == "semua" ? "UMKM" : c(skalaFilter?.name)} ${s("titleChart1_2")}`}
            />
          </div>
          <p className="font-semibold text-sm md:text-base text-wrap text-center md:text-start">
            {s("titleChart1_1")}
            {skalaFilter?.slug == "semua" ? "UMKM" : c(skalaFilter?.name)} {s("titleChart1_2")}
          </p>
        </div>
        <BarChart
          h={getCartHeight()}
          data={data}
          dataKey="name"
          barProps={{
            barSize: 25,
            label: {
              position: "insideRight",
              fill: theme == "dark" ? "#fff" : "#000",
              fontSize: 12,
              textAnchor: "middle",
              dx: 20,
            },
          }}
          withTooltip
          tooltipAnimationDuration={200}
          orientation="vertical"
          gridAxis={"y"}
          withBarValueLabel
          withXAxis={true}
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
          series={[{ name: "value", color: "color" }]}
        />
      </>
    </div>
  );
};

export default BarChartKecamatan;
