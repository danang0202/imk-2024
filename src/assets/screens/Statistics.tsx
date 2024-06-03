import Layout from "../../components/Layout";
import CardSummary from "../../components/statistik-page/CardSummary";
import { Tabs } from "@mantine/core";
import { IconBuildingStore, IconBusinessplan } from "@tabler/icons-react";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import StatisticsUMKM from "./StatisticsUMKM";

const Statistics = () => {
  return (
    <Layout pageTitle="STATISTIK">
      <div className="pt-5.5xl px-6xl bg-white dark:bg-slate-800">
        <div className="summary-container flex justify-between flex-wrap items-center gap-4">
          <CardSummary />
          <CardSummary />
          <CardSummary />
          <CardSummary />
          <CardSummary />
        </div>
        <div className="my-4">
          <Tabs defaultValue="umkm" color={EXTENDEDCOLORS.primary}>
            <Tabs.List grow>
              <Tabs.Tab
                value="umkm"
                leftSection={<IconBuildingStore className="dark:text-white" />}
                px={"4rem"}
                className="dark:hover:bg-slate-800 hover:bg-white" 
              >
                <p className="font-semibold hover:text-grey transition duration-300 dark:text-white">
                  Statatistik UMKM
                </p>
              </Tabs.Tab>
              <Tabs.Tab
                value="modal"
                leftSection={<IconBusinessplan className="dark:text-white" />}
                px={"4rem"}
                className="dark:hover:bg-slate-800 hover:bg-white"
              >
                <p className="font-semibold hover:text-grey transition duration-300 dark:text-white">
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
