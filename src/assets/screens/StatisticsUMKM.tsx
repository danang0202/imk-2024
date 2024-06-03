import { IconBook } from "@tabler/icons-react";
import BarChartKategori from "../../components/charts/BarChartKategori";
import BarChartKecamatanAndFilter from "../../components/charts/BarChartKecamatanAndFilter";
import DonutChartKategori from "../../components/charts/DonutChartKategori";
import { useState } from "react";
import TextModal from "../../components/commons/TextModal";

const StatisticsUMKM = () => {
  const [showModal, setShowModal] = useState<string>("");

  const dataModal = [
    {
      slug: "donut",
      title: "Panduan Interpretasi Grafik Lingkaran Jumlah UMKM",
      desc: "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.<br> The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.",
    },
  ];
  return (
    <>
      <div className="flex gap-4 w-full">
        <div className="w-[35%] box-bar-chart bg-white  border border-gray-300 py-8 px-6 mt-4 rounded relative dark:bg-black dark:text-white">
          <DonutChartKategori />
          <div
            className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black"
            onClick={() => setShowModal("donut")}
          >
            <IconBook className="dark:text-white" />
          </div>
        </div>
        <div className="w-[75%] box-bar-chart bg-white border border-gray-300 p-8 mt-4 rounded relative dark:bg-black dark:text-white">
          <BarChartKategori />
          <div className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black">
            <IconBook className="dark:text-white" />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="p-8 bg-white rounded mt-4 border border-gray-300 relative w-full dark:bg-black dark:text-white">
          <BarChartKecamatanAndFilter />
          <div className="box absolute bottom-8 right-6 cursor-pointer text-grey hover:text-black   ">
            <IconBook  className="dark:text-white"/>
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
