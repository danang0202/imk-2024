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
      if (result < 560) {
        return 560;
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
  const { theme } = useThemeContext();

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
        <div className="flex flex-col xl:flex-row justify-center md:justify-between pb-6 gap-4 items-center">
          <p className="font-semibold text-sm md:text-base text-wrap text-center md:text-start">
            Grafik Batang Jumlah{" "}
            {skalaFilter?.slug == "semua" ? "UMKM" : skalaFilter?.name} Per
            Kecamatan Kabupaten Kulon Progo
          </p>
          <div className="box flex flex-wrap w-full xl:w-fit justify-end xl:justify-between gap-2 md:gap-4 curosr-pointer items-center">
            <FilterChartSelection
              show={show}
            setShow={setShow}
              filterList={skalaUsahaFilterChloropleth}
              selectedFilter={skalaFilter}
              setSelectedFilter={setSkalaFilter}
            />
            <DownloadChartButton
              chartTitle={`Grafik Batang Jumlah UMKM Berdasarkan Skala Usaha per Kecamatan`}
            />
          </div>
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
