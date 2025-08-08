/**
 * This file was generated from CustomDonutChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type CustomdonutchartTypeEnum = "badge" | "label";

export interface CustomDonutChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    valueAttribute?: EditableValue<string | Big>;
    customdonutchartValue: string;
    occupiedUnits: DynamicValue<string>;
    vaccantUnits: DynamicValue<string>;
    bootstrapStyle: BootstrapStyleEnum;
    customdonutchartType: CustomdonutchartTypeEnum;
    onClickAction?: ActionValue;
}

export interface CustomDonutChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    valueAttribute: string;
    customdonutchartValue: string;
    occupiedUnits: string;
    vaccantUnits: string;
    bootstrapStyle: BootstrapStyleEnum;
    customdonutchartType: CustomdonutchartTypeEnum;
    onClickAction: {} | null;
}
