import { ReactElement, createElement, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import './styles.css'

interface DonutChartProps {
    occupiedUnits: any;
    vaccantUnits: any;
}
export function DonutChart({ occupiedUnits, vaccantUnits }: DonutChartProps): ReactElement {
    const [widthState, setWidthState] = useState<number>(0);
    const [heightState, setHeightState] = useState(0);
    const [occupiedUnitsState, setOccupiedunitsState] = useState<number>(0);
    const [vaccantUnitsState, setvaccantUnitsState] = useState<number>(0);

    useEffect(() => {
        const el = document.querySelector(".setWidgetWidthDonut") as HTMLElement | null;

        if (el) {
            setWidthState(el?.offsetWidth);
            setHeightState(el?.offsetHeight);
        }
    }, []);

    useEffect(() => {
        if (occupiedUnits) {
            setOccupiedunitsState(Number(occupiedUnits.value));
        }
    }, [occupiedUnits]);

    useEffect(() => {
        if (vaccantUnits) {
            setvaccantUnitsState(Number(vaccantUnits.value));
        }
    }, [vaccantUnits]);

    const total = occupiedUnitsState + vaccantUnitsState;

    const chartOptions: ApexOptions = {
        chart: {
            type: "donut"
        },
        labels: ["Occupied Units", "Vacant Units"],
        colors: ["#A39161", "#EAD69F"],
        stroke: {
            show: false,
            width: 0
        },
        dataLabels: {
            enabled: true,
            formatter: function (_, opts) {
                const value = opts.w.config.series[opts.seriesIndex];
                return value.toLocaleString(); // Slice label shows raw value
            }
        },
        tooltip: {
            custom: function ({ series, seriesIndex, w }) {
                const value = series[seriesIndex];
                const total = series.reduce((acc: any, val: any) => acc + val, 0);
                const percent = ((value / total) * 100).toFixed(1);

                const label = w.globals.labels[seriesIndex];

                return `<div class="apex-tooltip-custom"}>
            <strong>${label}</strong>: ${percent}%</div>`;
            }
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
            fontSize: "14px"
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "16px",
                            color: "#333",
                            offsetY: -10
                        },
                        value: {
                            show: true,
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#A39161",
                            formatter: function (val: any) {
                                return parseInt(val).toLocaleString();
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: "Total Units",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#000",
                            formatter: function () {
                                return total.toLocaleString();
                            }
                        }
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ]
    };

    const chartSeries = [occupiedUnitsState, vaccantUnitsState];
    return (
        <div>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="donut"
                width={widthState - 80}
                height={heightState - 150}
            />
        </div>
    );
}