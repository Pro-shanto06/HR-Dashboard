import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Chart3 = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [44, 55, 41, 17, 15],
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy(); // Cleanup when component unmounts
        };
    }, []); // Empty dependency array to run only on component mount

    return <div id="chart3" ref={chartRef}></div>;
};

export default Chart3;
