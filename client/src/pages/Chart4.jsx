import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

const Chart4 = () => {
    const [chartData, setChartData] = useState({
        series: [{
            data: [80, 55, 47, 35, 24],
        }],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ['Applications', 'Shortlisted', 'Rejected', 'On Hold', 'Finalised'],
            },
            colors: ['#11998E', '#E7B860', '#FF6A49', '#7B7B7B', '#2196F3'],
            title: {
                text: 'Acquisitions',
                align: 'center',
                style: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                }
            }
        }
    });

    useEffect(() => {
        const domContainer = document.querySelector('#chart4');
        ReactDOM.render(<ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />, domContainer);

    
        return () => {
            ReactDOM.unmountComponentAtNode(domContainer);
        };
    }, []); 

    return (
        <div id="chart4"></div>
    );
};

export default Chart4;
