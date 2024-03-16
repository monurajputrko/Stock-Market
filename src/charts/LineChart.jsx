import React from "react";
import { Line } from "react-chartjs-2";
import { useData } from "../Context/DataContext";

export const LineChart = ({ serverData }) => {
  // Extract dates, opening prices, and closing prices
   const { stock, time } = useData();
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
  
  // if (stockData[0].open !== null || stockData[0].close !== undefined) { }
const dates = stockData.map((data) => data.date).reverse(); // Reverse to show recent dates first
const openingPrices = stockData.map((data) => parseFloat(data?.open));
const closingPrices = stockData.map((data) => parseFloat(data?.close));
const HighestPrices = stockData.map((data) => parseFloat(data?.high));
const LowestPrices = stockData.map((data) => parseFloat(data?.low));

// Create datasets for the chart
const datasets = [
  {
    label: "Opening Prices",
    data: openingPrices,
    backgroundColor: "#198754",
    borderColor: "#198754",
    borderWidth: 1,
  },
  {
    label: "Closing Prices",
    data: closingPrices,
    backgroundColor: "#DC3545",
    borderColor: "#DC3545",
    borderWidth: 3,
  },
  {
    label: "Lowest Prices",
    data: LowestPrices,
    backgroundColor: "yellow",
    borderColor: "yellow",
    borderWidth: 3,
  },
  {
    label: "Highest Prices",
    data: HighestPrices,
    backgroundColor: "#31D2F2",
    borderColor: "#31D2F2",
    borderWidth: 3,
  },
];

  return (
    <div style={{ height: "50vh" }}>
      <Line
        data={{
          labels: dates,
          datasets: datasets,
        }}
        options={
           
          {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
         
        }
        
        }
        height={300}
      />
    </div>
  );
};


export const ComLineChart = () => {

  const { stock } = useData();

  const stockData = stock || [];
  const dates = stockData.map((data) => data.date);
  const values = stockData.map((data) => parseFloat(data.value));

  const datasets = [
    {
      label: "Values",
      data: values,
      backgroundColor: "green",
      borderColor: "green",
      borderWidth: 1,
    },
  ];

  return (
    <div style={{ height: "50vh" }}>
      <Line
        data={{
          labels: dates,
          datasets: datasets,
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        }}
        height={300}
      />
    </div>
  );
};

