import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
    const [chartData, setChartData] = useState({
        series: [
            { name: 'PRODUCT A', data: [55, 41, 67, 22, 43, 21, 49] },
            { name: 'PRODUCT B', data: [23, 20, 8, 13, 27, 33, 12] },
            { name: 'PRODUCT C', data: [17, 15, 15, 21, 14, 15, 13] }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%'
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            fill: {
                opacity: 1
            },
            legend: {
                position: 'right',
                offsetX: 0,
                offsetY: 50
            },
            yaxis: {
                categories: ['20%', '40%', '60%', '80%', '100%']
            }
        }
    });

    useEffect(() => {
        const domContainer = document.querySelector('#chart');
        ReactDOM.render(<ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />, domContainer);
    }, [chartData]);

    return (
        <div>
            <div id="chart"></div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Chart;
