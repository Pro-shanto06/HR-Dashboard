import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
    const [chartData, setChartData] = useState({
        series: [
            { name: 'Application', data: [55, 41, 67, 22, 43, 21, 49], color: '#11998E' },
            { name: 'Shortlisted', data: [23, 20, 8, 13, 27, 33, 12], color: '#E7B860' },
            { name: 'Rejected', data: [17, 15, 15, 21, 14, 15, 13], color: '#FF6A49' },
            { name: 'On Hold', data: [17, 15, 15, 21, 14, 15, 13], color: '#7B7B7B' },
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
                        offsetY: 0,
                        itemMargin: {
                            horizontal: 10 
                        },
                        markers: {
                            width: 10, 
                            height: 10 
                        }
                    }
                }
            }],
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            fill: {
                opacity: 1
            },
            plotOptions: {
                bar: {
                    barWidth: 40
                }
            },
            legend: {
                position: 'bottom',
                offsetX: 0,
                offsetY: 0,
                itemMargin: {
                    horizontal: 10 
                },
                markers: {
                    width: 10,
                    height: 10 
                }
            },
            yaxis: {
                max: 100,
                labels: {
                    formatter: (value) => `${value}%`
                }
            },
            title: {
                text: 'Statistics of Active Applications',
                align: 'center',
                style: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                }
            }
        }
    });

    useEffect(() => {
        const domContainer = document.querySelector('#chart');
        ReactDOM.render(<ReactApexChart options={chartData.options} series={chartData.series.map(({ name, data, color }) => ({ name, data, color }))} type="bar" height={350} />, domContainer);
    }, [chartData]);

    return (
        <div>
            <div id="chart"></div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Chart;
