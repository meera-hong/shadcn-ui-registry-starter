import { AreaChartComponent } from "@/app/(design)/components/[slug]/(demos)/area-chart";
import { BarChartComponent } from "@/app/(design)/components/[slug]/(demos)/bar-chart";
import { PieChartComponent } from "@/app/(design)/components/[slug]/(demos)/pie-chart";

export const chart = {
  name: "chart",
  components: {
    BarChart: <BarChartComponent />,
    AreaChart: <AreaChartComponent />,
    PieChart: <PieChartComponent />,
  },
};
