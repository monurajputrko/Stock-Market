

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useData } from '../../Context/DataContext';

export const CandlestickChart = () => {
  // Data Came from DataContext
    const { stock,time } = useData(); 
   let sliced = [];
   if (time === "1 Week") {
     sliced = stock.slice(0, 7);
   } else if (time === "1 Month") {
     sliced = stock.slice(0, 30);
   } else if (time === "6 Month") {
     sliced = stock.slice(0, 180);
   } else if (time === "1 Year") {
     sliced = stock.slice(0, 365);
   } else if (time === "5 Year") {
     sliced = stock.slice(0, 1825);
   } else if (time === "15 Days") {
     sliced = stock.slice(0, 15);
   }
   const stockData = sliced || [];
  const [chartOptions, setChartOptions] = useState({
    series: [{
      data: stockData.map(({ date, open, high, low, close }) => ({
        x: new Date(date).getTime(),
        y: [open, high, low, close]
      }))
    }],
    options: {
      chart: {
        type: 'candlestick',
        height: '100%',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function(value) {
            return new Date(value).toLocaleDateString();
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      tooltip: {
        x: {
          formatter: function(value) {
            return new Date(value).toLocaleDateString();
          }
        }
      }
    }
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      series: [{
        data: stockData.map(({ date, open, high, low, close }) => ({
          x: new Date(date).getTime(),
          y: [open, high, low, close]
        }))
      }]
    }));
  }, [stockData]);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="candlestick"
        height="100%"
      />
    </div>
  );
};
