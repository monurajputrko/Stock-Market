
import PolarChart from './PolarChart';
import DoughnutChart from './DoughnutChart';
import { ComBarChart, BarChart } from "./BarChart";
import {ComLineChart, LineChart} from './LineChart';
import RadarChart from './RadarChart';
import PieChart from './PieChart';
import { useData } from '../Context/DataContext';
import { useEffect, useState } from 'react';
import { randomString } from './Candles/Constant';
import { CandlestickChart, ComCandlestickChart } from "./Candles/LiveChart";

export default function AllCharts() {

  const { ChangeChart, stock, Commodities } = useData(); // Swithing Data Came from DataContext.jsx


  const chartStyle = {
    border: "2px solid black",
    padding: "10px",
    margin: "5px",
  };

  return (
    // Showing when Data is Loaded
    <div>
      {stock !== "" ? (
        <div>
          {ChangeChart === "BarChart" && ( // When Selecting Bar Chart
            <div style={chartStyle}>
              {Commodities ? (
                <ComBarChart style={chartStyle} />
              ) : (
                <BarChart style={chartStyle} />
              )}
            </div>
          )}
          {ChangeChart === "LineChart" && ( // When Selecting Line Chart
            <div style={chartStyle}>
              {Commodities ? (
                <ComLineChart style={chartStyle} />
              ) : (
                <LineChart style={chartStyle} />
              )}
            </div>
          )}
          {ChangeChart === "candle" && ( // When Selecting Line Chart
            <>
              {Commodities ? (
                ""
              ) : (
                <div style={chartStyle}>
                  <CandlestickChart />
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        // Showing when Data is in Loading state
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px",
          }}
        >
          <h1>Loading....</h1>
        </div>
      )}
    </div>
  );
}
