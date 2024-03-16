import React, { useState } from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

export const CardsForData = ({ item }) => {
  const [showMore, setShowMore] = useState(false); // Handling Show More State in Card

  return (
    <>
      <div class="ag-courses_box">
        {item.map((e, i) => {
          return (
            <div key={i} class="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                {e.current_status === "open" ? (
                  <h5 style={{ color: "green" }}>Open Currently</h5>
                ) : (
                  <h5 style={{ color: "red" }}>Close Currently</h5>
                )}

                <div class="ag-courses-item_title">Type - {e.type}</div>
                <h6 style={{ marginTop: "-20px", color: "white" }}>
                  Country : {e.region}
                </h6>
                <h6 style={{ color: "white" }}>
                  Primary Exchage - {e.primary_exchanges}
                </h6>
                {e.current_status !== "open" ? (
                  <div class="ag-courses-item_date-box">
                    Opening Time:
                    <span class="ag-courses-item_date"> {e.local_open}</span>
                  </div>
                ) : (
                  <div class="ag-courses-item_date-box">
                    Closing Time :
                    <span class="ag-courses-item_date"> {e.local_close}</span>
                  </div>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const CardsForSearch = ({ item }) => {

  return (
    <>
      <div class="ag-courses_box">
        {item.map((e, i) => {
         
          return (
            <div key={i} class="ag-courses_item">
              <Link
                to={`/chart/${e["1. symbol"]}`}
                class="ag-courses-item_link"
              >
                <div class="ag-courses-item_bg"></div>
                <h5 style={{ color: "green" }}>{e["1. symbol"]}</h5>
                <div class="ag-courses-item_title">{e["2. name"]}</div>

                <h6 style={{ marginTop: "-20px", color: "white" }}>
                  type - {e["3. type"]}
                </h6>
                <div class="ag-courses-item_date-box">
                  Currency : {e["8. currency"]}
                  <span class="ag-courses-item_date"> {e.local_close}</span>
                </div>
                <h6 style={{ color: "white" }}>Region : {e["4. region"]}</h6>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};


