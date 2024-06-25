import Layout from "../../components/Layout";
import CardSummary from "../../components/statistik-page/CardSummary";
import { Tabs } from "@mantine/core";
import { IconBuildingBank, IconBuildingFactory2, IconBuildingSkyscraper, IconBuildingStore, IconBusinessplan, IconHome } from "@tabler/icons-react";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import StatisticsUMKM from "./StatisticsUMKM";
import Breadcrumb from "../../components/commons/BreadCrumb";

const Statistics = () => {
  return (
    <Layout pageTitle="STATISTIK">
      <div className="pt-4xl px-4 lg:px-8 xl:px-6xl bg-white dark:bg-black overflow-x-hidden">
        <div className="py-4">
          <Breadcrumb />
        </div>
        <div className="summary-container grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 xl:gap-8 2xl:gap-12">
          <CardSummary icon={IconBuildingStore} label="Total UMKM" value={100} />
          <CardSummary icon={IconHome} label="Usaha Mikro" value={32} />
          <CardSummary icon={IconBuildingSkyscraper} label="Usaha Kecil" value={34} />
          <CardSummary icon={IconBuildingFactory2} label="Usaha Menengah" value={34} />
          <CardSummary icon={IconBuildingBank} label="Pemberi Modal" value={20} />
        </div>
        <div className="my-4">
          <Tabs defaultValue="umkm" color={EXTENDEDCOLORS.black}>
            <Tabs.List grow __size="xs">
              <Tabs.Tab
                value="umkm"
                leftSection={
                  <IconBuildingStore className="dark:text-white w-5 h-5 md:w-6 md:h6" />
                }
                className="dark:hover:bg-black hover:bg-white"
              >
                <p className="font-semibold hover:text-grey transition duration-300 dark:text-white text-xs md:text-sm">
                  Statatistik UMKM
                </p>
              </Tabs.Tab>
              <Tabs.Tab
                value="modal"
                leftSection={
                  <IconBusinessplan className="dark:text-white w-5 h-5 md:w-6 md:h6" />
                }
                className="dark:hover:bg-black hover:bg-white"
              >
                <p className="font-semibold hover:text-grey transition duration-300 dark:text-white text-xs md:text-sm">
                  Statistik Info Modal
                </p>
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="umkm" className="py-4">
              <StatisticsUMKM />
            </Tabs.Panel>
            <Tabs.Panel value="modal" className="py-4">
              <div className="w-full px-4 py=16 flex flex-col items-center justify-center min-h-[20rem] xl:min-h-[38rem]">
                <img src="/image/maintenance.png" alt="Maintenance" className="w-[6rem] md:w-[11rem] xl:w-[13rem]" />
                <p className="text-xs md:text-sm lg:text-lg text-grey">Halaman ini segera hadir ...</p>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
