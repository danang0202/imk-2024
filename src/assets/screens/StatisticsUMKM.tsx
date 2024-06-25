import { IconBook } from "@tabler/icons-react";
import BarChartKategori from "../../components/charts/BarChartKategori";
import BarChartKecamatanAndFilter from "../../components/charts/BarChartKecamatanAndFilter";
import DonutChartKategori from "../../components/charts/DonutChartKategori";
import { useState } from "react";
import TextModal from "../../components/commons/TextModal";
import { Map } from "../../components/statistik-page/Map";
import BarChartKecamatan from "../../components/charts/BarChartKecamatan";
import { TypeData } from "../../components/table/Selection";

const StatisticsUMKM = () => {
  const [showModal, setShowModal] = useState<string>("");
  const [filterChloropleth, setFilterChloropleth] = useState<TypeData>({
    name: "Semua",
    slug: "semua",
  });

  const dataModal = [
    {
      slug: "donut",
      title: "Panduan Interpretasi Grafik Lingkaran Jumlah UMKM",
      desc: "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.<br> The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.",
    },
    {
      slug: "bar-kategori",
      title: "Panduan Interpretasi Grafik Batang per Kategori",
      desc: "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.<br> The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.",
    },
    {
      slug: "bar-kecamatan",
      title:
        "Panduan Interpretasi Grafik Batang per Kecamatan berdasarkan Kategori",
      desc: "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.<br> The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.",
    },
    {
      slug: "chloropath",
      title: "Panduan Interpretasi Peta Chloroplath",
      desc: "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.<br> The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-1/2 xl:w-7/12 p-4 md:py-4  bg-white rounded mt-4 border border-gray-300 dark:border-gray-700 relative dark:bg-black dark:text-white">
          <BarChartKecamatan
            skalaFilter={filterChloropleth}
            setSkalaFilter={setFilterChloropleth}
          />
          <div
            className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black bg-silver rounded p-1 "
            onClick={() => setShowModal("bar-kecamatan")}
        >
            <IconBook />
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-5/12 p-4 md:p-4 bg-white rounded mt-4 border border-gray-300 dark:border-gray-700 relative dark:bg-black dark:text-white">
          <Map
            skalaFilter={filterChloropleth}
            setSkalaFilter={setFilterChloropleth}
          />
          <div
            className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black bg-silver rounded p-1 "
            onClick={() => setShowModal("chloropath")}
          >
            <IconBook />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="w-full xl:w-[35%] box-bar-chart bg-white  border border-gray-300 dark:border-gray-700 py-4  px-4 md:px-6 mt-4 rounded relative dark:bg-black dark:text-white">
          <DonutChartKategori />
          <div
            className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black bg-silver rounded p-1"
            onClick={() => setShowModal("donut")}
          >
            <IconBook />
          </div>
        </div>
        <div className="w-full xl:w-[75%] box-bar-chart bg-white border border-gray-300 dark:border-gray-700 p-4 md:p-4 mt-4 rounded relative dark:bg-black dark:text-white pb-10">
          <BarChartKategori />
          <div
            className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black translate-y-6 bg-silver rounded p-1"
            onClick={() => setShowModal("bar-kategori")}
          >
            <IconBook />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="p-4  bg-white rounded mt-4 border border-gray-300 dark:border-gray-700 relative w-full dark:bg-black dark:text-white">
          <BarChartKecamatanAndFilter />
          <div
            className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black bg-silver rounded p-1 "
            onClick={() => setShowModal("bar-kecamatan")}
          >
            <IconBook />
          </div>
        </div>
      </div>
      {showModal && showModal != "" && (
        <TextModal
          modalData={dataModal.find((item) => item.slug == showModal)}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default StatisticsUMKM;
