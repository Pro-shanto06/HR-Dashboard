import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const Chart3 = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [44, 55],
            labels: ['Male', 'Female'], 
            chart: {
                type: 'donut',
            },
            colors: ['#11998E', '#E7B860'], 
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
            }],
            title: {
                text: 'Candidates by Gender',
                align: 'left',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#333'
                }
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

export default Chart3;
