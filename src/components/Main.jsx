import { useData } from "../Context/DataContext";
import DataContainer from "./DataContainer";
import Header from "./Header";

function Main() {
    const { Loading } = useData();
    return (
      <div>
        {/* Component for Header */}
        <Header />
        <br />
        {/* Component for DataContainer */}
         <DataContainer />
      </div>
    );
  }
  
  export default Main;