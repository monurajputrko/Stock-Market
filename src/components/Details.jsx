import { useParams } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { BarChart, ComBarChart } from "../charts/BarChart";
import { CandlestickChart } from "../charts/Candles/LiveChart";
import { ComLineChart, LineChart } from "../charts/LineChart";
import Buttons, { FetchButtons, FetchDetailFilter } from "./Buttons";
import '../App.css';
import { CardsForSearch } from "./CardsForData";
import Errors from "./Error";


export default function Details() {
    const {
      ChangeChart,
      stock,
      Commodities,
      handleDetails,
      Title,
      setSearch,
      handleSearchResult,
      fetchGlobalSearch,
      mainData,
      Error
    } = useData(); // Swithing Data Came from DataContext.jsx
    
      let { id } = useParams();
    console.log("OK = ", id);
    handleDetails(id);
   const chartStyle = {
     border: "2px solid black",
     padding: "10px",
     margin: "5px",
   };

   return (
     <>
       {Error ? (
         <>
           <Errors />
         </>
       ) : (
         <>
           <br />
           <div
             className="form-inline"
             style={{ display: "flex", justifyContent: "space-evenly" }}
           >
             {/* Input Field for Searching */}
             <input
               className="form-control mr-sm-2"
               type="search"
               placeholder="Search Stocks"
               aria-label="Search"
               onChange={(e) => {
                 setSearch(e.target.value);
                 fetchGlobalSearch(e.target.value);
               }}
               style={{ marginRight: "1rem" }}
             />
             {/* Button for Search button */}
             <button
               onClick={() => {
                 console.log("Function Invoked");
                 handleSearchResult();
               }}
               class="btn btn-dark"
             >
               Search
             </button>
           </div>
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
           <br />
           <div class="ag-format-container">
             {/* <CardsForSearch item={mainData} /> */}
           </div>
         </>
       )}
     </>
   );
}
