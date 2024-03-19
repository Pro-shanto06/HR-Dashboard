import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const Chart2 = () => {
  useEffect(() => {
    const options = {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup function (componentWillUnmount equivalent)
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return <div id="chart2"></div>;
};

export default Chart2;
