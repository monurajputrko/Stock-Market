import { useParams } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { BarChart, ComBarChart } from "../charts/BarChart";
import { CandlestickChart } from "../charts/Candles/LiveChart";
import { ComLineChart, LineChart } from "../charts/LineChart";
import Buttons, { FetchButtons, FetchDetailFilter } from "./Buttons";
import '../App.css';


export default function Details() {
    const { ChangeChart, stock, Commodities, handleDetails,Title } = useData(); // Swithing Data Came from DataContext.jsx
    
      let { id } = useParams();
    console.log("OK = ", id);
    handleDetails(id);
   const chartStyle = {
     border: "2px solid black",
     padding: "10px",
     margin: "5px",
   };

   return (
     // Showing when Data is Loaded
     <>
       <br />
       <Buttons />

       <div>
         <h4>{Title}</h4>
         {stock !== "" ? (
           <div>
             {ChangeChart === "BarChart" && ( // When Selecting Bar Chart
               <div style={chartStyle}>
                 {Commodities ? (
                   <ComBarChart serverData={stock} style={chartStyle} />
                 ) : (
                   <BarChart serverData={stock} style={chartStyle} />
                 )}
               </div>
             )}
             {ChangeChart === "LineChart" && ( // When Selecting Line Chart
               <div style={chartStyle}>
                 {Commodities ? (
                   <ComLineChart serverData={stock} style={chartStyle} />
                 ) : (
                   <LineChart serverData={stock} style={chartStyle} />
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
           <div
             style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               margin: "50px",
             }}
           >
             <div class="loader"></div>
           </div>
         )}
       </div>
       <FetchDetailFilter />
     </>
   );
}
