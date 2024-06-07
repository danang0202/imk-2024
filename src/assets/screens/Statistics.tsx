import Layout from "../../components/Layout";
import CardSummary from "../../components/statistik-page/CardSummary";
import { Tabs } from "@mantine/core";
import { IconBuildingStore, IconBusinessplan } from "@tabler/icons-react";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import StatisticsUMKM from "./StatisticsUMKM";
import Breadcrumb from "../../components/commons/BreadCrumb";

const Statistics = () => {
  return (
    <Layout pageTitle="STATISTIK">
      <div className="px-4 pt-5xl xl:hidden w-full bg-white dark:bg-black">
        <Breadcrumb />
      </div>
      <div className="pt-0 xl:pt-5.5xl px-4 lg:px-8 xl:px-6xl bg-white dark:bg-black overflow-x-hidden">
        <div className="summary-container flex justify-center xl:justify-between flex-wrap items-center gap-2 md:gap-4">
          <CardSummary />
          <CardSummary />
          <CardSummary />
          <CardSummary />
          <CardSummary />
        </div>
        <div className="my-4">
          <Tabs defaultValue="umkm" color={EXTENDEDCOLORS.primary}>
            <Tabs.List grow __size="xs">
              <Tabs.Tab
                value="umkm"
                leftSection={
                  <IconBuildingStore className="dark:text-white w-5 h-5 md:w-6 md:h6 lg:w-7 lg:h7" />
                }
                className="dark:hover:bg-black hover:bg-white"
              >
                <p className="font-semibold hover:text-grey transition duration-300 dark:text-white text-xs md:text-sm lg:text-base">
                  Statatistik UMKM
                </p>
              </Tabs.Tab>
              <Tabs.Tab
                value="modal"
                leftSection={
                  <IconBusinessplan className="dark:text-white w-5 h-5 md:w-6 md:h6 lg:w-7 lg:h7" />
                }
                className="dark:hover:bg-black hover:bg-white"
              >
                <p className="font-semibold hover:text-grey transition duration-300 dark:text-white text-xs md:text-sm lg:text-base">
                  Statistik Info Modal
                </p>
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="umkm" className="py-4">
              <StatisticsUMKM />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
