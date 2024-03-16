

import { useData } from '../Context/DataContext';
import Buttons, { FetchButtons } from './Buttons';
import AllCharts from '../charts/AllCharts';
import '../App.css'
import '../components/Loader.css';

const Filters = () => {

    const { Loading } = useData();  // Data Came from DataContext
 
    return (
      <>
        <div
          className="tabsClass"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        ></div>
        <FetchButtons />
        <br />
        {/* Component for Chart Buttons */}
        <Buttons />

        {/* Component for Charts */}
        {Loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <div class="loader"></div>
          </div>
        ) : (
          <AllCharts />
        )}
      </>
    );
}

export default Filters