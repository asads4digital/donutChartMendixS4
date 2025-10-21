import {
    ReactElement, createElement,
} from "react";

import { CustomDonutChartContainerProps } from "../typings/CustomDonutChartProps";
import "./ui/CustomDonutChart.css";
import { DonutChart } from "./components/DonutChart/DonutChart";

export function CustomDonutChart(
    props: CustomDonutChartContainerProps
): ReactElement {
    const {
        occupiedUnits,
        vaccantUnits,
    } = props;

    return (
        <DonutChart occupiedUnits={occupiedUnits} vaccantUnits={vaccantUnits} />
    //     <DonutChart
    //     occupiedUnits={{ value: 75 }}
    //     vaccantUnits={{ value: 25 }}
    // />
    );
}
