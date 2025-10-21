import { ReactElement, createElement, useEffect, useState, useRef } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./styles.css";

interface DonutChartProps {
    occupiedUnits: any;
    vaccantUnits: any;
}

export function DonutChart({ occupiedUnits, vaccantUnits }: DonutChartProps): ReactElement {
    const [occ, setOcc] = useState(0);
    const [vac, setVac] = useState(0);
    const [chartHeight, setChartHeight] = useState(250);
    const containerRef = useRef<HTMLDivElement>(null);

    /* ---------- data ---------- */
    useEffect(() => {
        if (occupiedUnits?.value != null) setOcc(Number(occupiedUnits.value));
    }, [occupiedUnits]);
    useEffect(() => {
        if (vaccantUnits?.value != null) setVac(Number(vaccantUnits.value));
    }, [vaccantUnits]);

    const total = occ + vac;
    const series = [occ, vac];

    /* ---------- resize ---------- */
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ro = new ResizeObserver(([e]) => {
            const h = e.contentRect.height;
            setChartHeight(Math.max(h - 70, 200)); // 70 px = title + legend
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    /* ---------- Apex options ---------- */
    const options: ApexOptions = {
        chart: { type: "donut" },
        labels: ["Occupied Units", "Vacant Units"],
        colors: ["#A39161", "#EAD69F"],
        stroke: { show: false },
        dataLabels: { enabled: true,
                     formatter: (_, o) => o.w.config.series[o.seriesIndex].toLocaleString() },
        tooltip: {
            custom: ({ series, seriesIndex, w }) => {
                const val = series[seriesIndex];
                const pct = total ? ((val / total) * 100).toFixed(1) : "0.0";
                return `<div class="apex-tooltip-custom"><strong>${w.globals.labels[seriesIndex]}</strong>: ${pct}%</div>`;
            }
        },
        legend: { position: "bottom", horizontalAlign: "center", fontSize: "16px" },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: { show: true, fontSize: "16px", color: "#333", offsetY: -10 },
                        value: { show: true, fontSize: "24px", fontWeight: "bold", color: "#A39161",
                                 formatter: v => Number(v).toLocaleString() },
                        total: {
                            show: true,
                            showAlways: true,
                            label: "Total Units",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#000",
                            formatter: () => total.toLocaleString()
                        }
                    }
                }
            }
        },
        responsive: [{ breakpoint: 480, options: { chart: { width: 250 } } }]
    };

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                minHeight: 260,
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div style={{
                flex: "0 0 auto",
                textAlign: "center",
                marginBottom: 15,
                fontWeight: 600,
                fontSize: 14,
                color: "#333"
            }}>
                 Occupied vs Vacant Units
            </div>

            {total > 0 ? (
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="100%"
                    height={chartHeight}
                />
            ) : (
                <div style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                    fontSize: 14
                }}>
                    No data available
                </div>
            )}
        </div>
    );
}