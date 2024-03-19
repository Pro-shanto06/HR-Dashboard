import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Chart2 = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69]
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Applications Received Time',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], 
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['8PM', '10PM', '12PM', '2AM', '4AM', '6AM', '8AM', ],
            }
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy(); 
        };
    }, []);

    return <div id="chart" ref={chartRef}></div>;
};

export default Chart2;
