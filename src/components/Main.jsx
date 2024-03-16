import { useData } from "../Context/DataContext";
import DataContainer from "./DataContainer";
import Errors from "./Error";
import Header from "./Header";

function Main() {
  const { Error } = useData();
  return (
    <div>
      {Error ? (
        <>
          <Errors />
        </>
      ) : (
        <>
          <Header />
          <br />
          <DataContainer />
        </>
      )}
    </div>
  );
}

export default Main;
