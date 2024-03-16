

import { useData } from '../Context/DataContext';
import Buttons, { FetchButtons } from './Buttons';
import AllCharts from '../charts/AllCharts';
import '../App.css'

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
        >
        </div>
        <FetchButtons />
        <br />
        {/* Component for Chart Buttons */}
        <Buttons />
     
        {/* Component for Charts */}
        {Loading ? <div style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",marginTop:"10px"}}><h1>Loading....</h1></div> : <AllCharts />}
      </>
    );
}

export default Filters