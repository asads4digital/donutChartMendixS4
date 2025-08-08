import { ReactElement, createElement, 
    // useCallback
 } from "react";

import { CustomDonutChartContainerProps } from "../typings/CustomDonutChartProps";
// import { BadgeSample } from "./components/BadgeSample";
import "./ui/CustomDonutChart.css";
import { DonutChart } from "./components/DonutChart/DonutChart";

export function CustomDonutChart(
 props: CustomDonutChartContainerProps
): ReactElement {
    const { 
        occupiedUnits,
        vaccantUnits,
        // customdonutchartType, customdonutchartValue, valueAttribute, onClickAction, style, bootstrapStyle 
    } = props;
    // const onClickHandler = useCallback(() => {
    //     if (onClickAction && onClickAction.canExecute) {
    //         onClickAction.execute();
    //     }
    // }, [onClickAction]);

    return (
     <DonutChart occupiedUnits={occupiedUnits} vaccantUnits={vaccantUnits}/>
    );
}
