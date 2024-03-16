import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Details from "../components/Details";
import Errors from "../components/Error";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="*" element={<Errors />}></Route>
      <Route path="/chart/:id" element={<Details />} />
    </Routes>
  );
};
