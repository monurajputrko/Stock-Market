import React from 'react'
import { Button } from 'react-bootstrap';
import { useData } from '../Context/DataContext';

export default function Buttons() {

     const { setChangeChart, Commodities } = useData(); // Data Came from DataContext

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "5px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/*  When Selecting Line Chart */}
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("LineChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Line Chart
        </Button>

        {/*  When Selecting Radar Chart */}
        {/* <Button
          variant="info"
          onClick={() => {
            setChangeChart("RadarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Radar chart
        </Button> */}

        {/*  When Selecting Bar Chart */}
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("BarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Bar Chart
        </Button>

        {/*  When Selecting Doughnut Chart */}
        {Commodities ? (
         ""
        ) : (
          <Button
            variant="info"
            onClick={() => {
              setChangeChart("candle");
            }}
            style={{ marginLeft: "1vw", width: "10rem" }}
          >
            Candle Chart
          </Button>
        )}

        {/*  When Selecting Polar Chart */}
        {/* <Button
          variant="info"
          onClick={() => {
            setChangeChart("PolarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Polar Chart
        </Button> */}

        {/*  When Selecting Pie Chart */}
        {/* <Button
          variant="info"
          onClick={() => {
            setChangeChart("PieChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Pie Chart
        </Button> */}
      </div>
    </div>
  );
}

export const FetchButtons = () => {

     const { setChangeChart, FetchCommodities } = useData(); // Data Came from DataContext

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "5px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/*  When Selecting Line Chart */}
        <Button
          variant="info"
          onClick={() => {
            FetchCommodities("WTI");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Crude Oil
        </Button>

        {/*  When Selecting Radar Chart */}
       
        {/*  When Selecting Bar Chart */}
        <Button
          variant="info"
          onClick={() => {
            FetchCommodities("NATURAL_GAS");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Natural Gas
        </Button>

        {/*  When Selecting Doughnut Chart */}
        <Button
          variant="info"
          onClick={() => {
            // setChangeChart("DoughnutChart");
            FetchCommodities("COPPER");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Copper
        </Button>

        {/*  When Selecting Polar Chart */}
        <Button
          variant="info"
          onClick={() => {
            FetchCommodities("ALUMINUM");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Aluminum
        </Button>

        {/*  When Selecting Pie Chart */}
        <Button
          variant="info"
          onClick={() => {
           FetchCommodities("WHEAT");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Wheat
        </Button>
        <Button
          variant="info"
          onClick={() => {
           FetchCommodities("CORN");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Corn
        </Button>
        <Button
          variant="info"
          onClick={() => {
            FetchCommodities("COTTON");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Cotton
        </Button>
        <Button
          variant="info"
          onClick={() => {
            FetchCommodities("SUGAR");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Sugar
        </Button>
        <Button
          variant="info"
          onClick={() => {
           FetchCommodities("COFFEE");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Coffee
        </Button>
       
      </div>
    </div>
  );
}