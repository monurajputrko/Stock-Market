import "../App.css";
import {CardsForData, CardsForSearch} from "./CardsForData";
import Filters from "./Filters";
import { useData } from "../Context/DataContext";

const DataContainer = () => {
  const { handleSearchResult, setSearch, mainData, fetchGlobalSearch,cards,Title } =
    useData(); // Data Came From DataContext
console.log(mainData);
  return (
    <div className="tabsClass">
      {/* Form for Searching */}
      <div
        className="form-inline"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {/* Input Field for Searching */}
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for your favorite stocks. Ex. TATA,RELIANCE,ADANI"
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
      {/* Components for Filter And Charts */}
      <Filters />
      {}
      {cards ? (
        <div class="ag-format-container">
          <CardsForData item={mainData} />
        </div>
      ) : (
        <div class="ag-format-container">
          <CardsForSearch item={mainData} />
        </div>
      )}
    </div>
  );
};

export default DataContainer;
