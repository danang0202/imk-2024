// import { Title } from "@mantine/core";
import Layout from "../../components/Layout";
import BarCharts from "../../components/charts/BarCharts";
import PieCharts from "../../components/charts/PieCharts";
import { AreaChart, BarChart } from "@mantine/charts";

const Statistics = () => {
  const data = [
    {
      date: "Mar 22",
      Apples: 110,
    },
    {
      date: "Mar 23",
      Apples: 60,
    },
    {
      date: "Mar 24",
      Apples: 80,
    },
    {
      date: "Mar 25",
      Apples: null,
    },
    {
      date: "Mar 26",
      Apples: null,
    },
    {
      date: "Mar 27",
      Apples: 40,
    },
    {
      date: "Mar 28",
      Apples: 120,
    },
    {
      date: "Mar 29",
      Apples: 80,
    },
  ];

  const tabelData = [
    { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
  ];

  return (
    <>
      <Layout pageTitle="STATISTIK">
        <div className="p-8 py-6xl flex flex-col items-center justify-center w-full">
          <div className="bg-white shadow w-max p-8 rounded flex flex-row gap-8 items-center">
            <BarCharts />
            <PieCharts />
          </div>
          <div className="w-full h-screen">
            <AreaChart
              h={300}
              data={data}
              dataKey="date"
              series={[{ name: "Apples", color: "indigo.6" }]}
              curveType="linear"
              connectNulls
            />
            <BarChart
              h={300}
              data={tabelData}
              dataKey="month"
              referenceLines={[
                {
                  y: 130,
                  color: "red.5",
                  label: "Profit reached",
                  labelPosition: "insideTopRight",
                },
              ]}
              series={[
                { name: "Smartphones", color: "violet.6" },
                { name: "Laptops", color: "blue.6" },
                { name: "Tablets", color: "teal.6" },
              ]}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Statistics;
