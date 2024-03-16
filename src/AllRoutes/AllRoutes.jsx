import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import { CandlestickChart } from "../charts/Candles/LiveChart";
import Details from "../components/Details";


export const AllRoutes = ()=>{

    return (
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/chart"></Route> */}
        <Route path="/chart/:id" element={<Details />} />
      </Routes>
    );

}