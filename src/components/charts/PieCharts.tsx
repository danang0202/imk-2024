import { PieChart } from "@mui/x-charts";

const PieCharts = () => {
  const data = [
    { id: 0, value: 10, label: "Usaha Menegah", color: "#4BAF4F" }, // Warna merah
    { id: 1, value: 15, label: "Usaha Mikro", color: "#263238" }, // Warna hijau
    { id: 2, value: 20, label: "Usaha Besar", color: "#f59c0b" }, // Warna biru
  ];

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          arcLabel: (item) => `${item.label} (${item.value})`,
        },
      ]}
      height={300}
      width={600}
    />
  );
};

export default PieCharts;
