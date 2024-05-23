import { Title } from "@mantine/core";
import Layout from "../../components/Layout";
import BarCharts from "../../components/charts/BarCharts";
import PieCharts from "../../components/charts/PieCharts";

const Statistics = () => {
  return (
    <>
      <Layout pageTitle="STATISTIK">
        <div className="p-8 py-6xl flex flex-col items-center justify-center w-full">
          <div className="bg-white shadow w-max p-8 rounded flex flex-row gap-8 items-center">
            <BarCharts />
            <PieCharts />
          </div>
          <div className="w-full bg-red-500 h-screen">
            {/* <Donut /> */}
            <Title order={1} component={"p"} size={"4rem"}>Test</Title>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Statistics;
