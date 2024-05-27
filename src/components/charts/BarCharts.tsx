import * as React from "react";
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const test = [3, 5, "Lendah"];

const dataset = [
  test,
  [0, 5, "Gulurejo"],
  [10, 0, "Third"],
  [9, 6, "Fourth"],
].map(([high, low, order]) => ({
  high,
  low,
  order,
}));
const chartSettingsH: Partial<BarChartProps> = {
  dataset,
  height: 300,
  yAxis: [{ scaleType: "band", dataKey: "order" }],
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
  slotProps: {
    legend: {
      direction: "row",
      position: { vertical: "bottom", horizontal: "middle" },
      padding: -5,
    },
  },
};
const chartSettingsV: Partial<BarChartProps> = {
  ...chartSettingsH,
  xAxis: [{ scaleType: "band", dataKey: "order" }],
  yAxis: undefined,
};

const BarCharts: React.FC = () => {
  const [layout, setLayout] = React.useState<"horizontal" | "vertical">(
    "vertical"
  );
  const [radius, setRadius] = React.useState(10);

  return (
    <Stack direction="column" spacing={1} sx={{ width: "100%", maxWidth: 600 }}>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" spacing={1} flex={1}>
          <Typography gutterBottom>Border Radius</Typography>
          <Slider
            value={radius}
            onChange={(_, v) => setRadius(v as number)}
            valueLabelDisplay="auto"
            min={0}
            max={50}
            sx={{ mt: 2 }}
          />
        </Stack>
        <TextField
          select
          sx={{ minWidth: 150 }}
          label="layout"
          value={layout}
          onChange={(event) =>
            setLayout(event.target.value as "horizontal" | "vertical")
          }
        >
          <MenuItem value="horizontal">Horizontal</MenuItem>
          <MenuItem value="vertical">Vertical</MenuItem>
        </TextField>
      </Stack>
      <BarChart
        series={[
          {
            dataKey: "high",
            label: "High",
            color: "#E8F5E9",
            layout,
            stack: "stack",
          },
          {
            dataKey: "low",
            label: "Low",
            color: "#000",
            layout,
            stack: "stack",
          },
        ]}
        {...(layout === "vertical" ? chartSettingsV : chartSettingsH)}
        borderRadius={radius}
      />
    </Stack>
  );
};

export default BarCharts;
