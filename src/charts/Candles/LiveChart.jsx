

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useData } from '../../Context/DataContext';

export const CandlestickChart = () => {
  // Data Came from DataContext
    const { stock } = useData(); 
  
  const [chartOptions, setChartOptions] = useState({
    series: [{
      data: stock.map(({ date, open, high, low, close }) => ({
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
      title: {
        text: 'Candlestick Chart',
        align: 'left'
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
        data: stock.map(({ date, open, high, low, close }) => ({
          x: new Date(date).getTime(),
          y: [open, high, low, close]
        }))
      }]
    }));
  }, [stock]);

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
