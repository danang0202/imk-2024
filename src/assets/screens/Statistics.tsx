import Layout from "../../components/Layout";
import CardSummary from "../../components/statistik-page/CardSummary";
import BarChartKecamatanAndFilter from "../../components/charts/BarChartKecamatanAndFilter";
import BarChartKategori from "../../components/charts/BarChartKategori";
import DonutChartKategori from "../../components/charts/DonutChartKategori";
import { Tabs } from "@mantine/core";
import { IconMessageCircle, IconPhoto } from "@tabler/icons-react";
import { EXTENDEDCOLORS } from "../../DataBuilder";

const Statistics = () => {
  return (
    <Layout pageTitle="STATISTIK">
      <div className="py-6xl px-8">
        <div className="summary-container flex justify-center flex-wrap items-center gap-4">
          <CardSummary />
          <CardSummary />
          <CardSummary />
          <CardSummary />
          <CardSummary />
        </div>
        <div className="my-4">
          <Tabs defaultValue="gallery" color={EXTENDEDCOLORS.primary}>
            <Tabs.List grow>
              <Tabs.Tab value="gallery" leftSection={<IconPhoto />} px={"4rem"}>
                Gallery
              </Tabs.Tab>
              <Tabs.Tab value="messages" leftSection={<IconMessageCircle />} px={"4rem"}>
                Messages
              </Tabs.Tab>
            </Tabs.List>

            {/* <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

            <Tabs.Panel value="messages">Messages tab content</Tabs.Panel> */}
          </Tabs>
        </div>
        <div className="flex gap-4">
          <div className="w-[40%] box-bar-chart bg-white w-full p-8 mt-4 rounded shadow">
            <DonutChartKategori />
          </div>
          <div className="w-[50%] box-bar-chart bg-white w-full p-8 mt-4">
            <BarChartKategori />
          </div>
        </div>
        <div className="p-8 bg-white shadow rounded mt-4 ">
          <BarChartKecamatanAndFilter />
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
