import React, { createContext, useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
export const DataContext = createContext();

export const useData = () => useContext(DataContext); // Use context Functions for Consuming Data form DataContext

export const DataProvider = ({ children }) => {
  const [mainData, setMainData] = useState(""); // State for Main Data
  const [ChangeChart, setChangeChart] = useState("LineChart"); // State for Changing Chart
  const [search, setSearch] = useState(""); // State for Storing Search Data
  const [stock, setStockData] = useState([]);
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [time, setTime] = useState("1 Week");
  const [Title, setTitle] = useState("");
  const [Commodities, setCommodities] = useState(false);
  const [cards, setCards] = useState(true);
  

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  console.log(search);

  const randomString = generateRandomString(16);

  const fetchStockData = async (symbol) => {
    // let url = "";
    // let key = "";
    // if (Fetching) {
    //   key = "Time Series FX (Daily)";
    //   url = `${process.env.REACT_APP_API}query?function=FX_DAILY&from_symbol=USD&to_symbol=INR&apikey=${randomString}`;
    // } else {
    //   key = "";
    //   url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=EPL.BSE&outputsize=full&apikey=${randomString}`;
    // }
    setLoading(true);
    setTitle("You Are Watching The Data of $ Vs ₹")
    try {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=INR&apikey=qdkxseuesdhfue"
      );
      const data = await response.json();

      const weeklyTimeSeries = data["Time Series FX (Daily)"];
      const dates = Object.keys(weeklyTimeSeries);
      const datesData = [];
      dates.forEach((date) => {
        const weeklyData = weeklyTimeSeries[date];
        const dateData = {
          date: date,
          open: weeklyData["1. open"],
          high: weeklyData["2. high"],
          low: weeklyData["3. low"],
          close: weeklyData["4. close"],
          volume: weeklyData["5. volume"],
        };
        datesData.push(dateData);
      });
      const sliced = datesData.slice(0, 15);
      console.log(sliced);
      setStockData(sliced);
      setLoading(false);
      setError(false);
      setCommodities(false);
    } catch (error) {
      setError(true);
      console.log("Error = ", error);
    }
  };


  const handleSearchResult = async () => {
    try {
      const responseData1 = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${search}.BSE&outputsize=full&apikey=qdkxseuesdhfue`
      );
      const resdata1 = await responseData1.json();

      const weeklyTimeSeries = resdata1["Time Series (Daily)"];
      const dates = Object.keys(weeklyTimeSeries);
      const datesData = [];
      dates.forEach((date) => {
        const weeklyData = weeklyTimeSeries[date];
        const dateData = {
          date: date,
          open: weeklyData["1. open"],
          high: weeklyData["2. high"],
          low: weeklyData["3. low"],
          close: weeklyData["4. close"],
          volume: weeklyData["5. volume"],
        };
        datesData.push(dateData);
      });
      const sliced = datesData.slice(0, 15);
      setTitle(`Your Are Watching Data of ${search}`);
      console.log(sliced);
      setStockData(sliced);
      console.log("Function Invoked again");
      setError(false);
      setCommodities(false);
    } catch (error) {
      console.log("Function Not Invoked");
      setError(true);
      console.log("Error = ", error);
    }
  };

  //////////

  const handleDetails = async (text) => {
    try {
      const responseData1 = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${text}&outputsize=full&apikey=qdkxseuesdhfue`
      );
      const resdata1 = await responseData1.json();

      const weeklyTimeSeries = resdata1["Time Series (Daily)"];
      const dates = Object.keys(weeklyTimeSeries);
      const datesData = [];
      dates.forEach((date) => {
        const weeklyData = weeklyTimeSeries[date];
        const dateData = {
          date: date,
          open: weeklyData["1. open"],
          high: weeklyData["2. high"],
          low: weeklyData["3. low"],
          close: weeklyData["4. close"],
          volume: weeklyData["5. volume"],
        };
        datesData.push(dateData);
      });

      setStockData(datesData);
      setTitle(`Your Are Watching Data of ${text} (Symbol)`);
      console.log("Function Invoked again");
      setError(false);
      setCommodities(false);
    } catch (error) {
      console.log("Function Not Invoked");
      setError(true);
      console.log("Error = ", error);
    }
  };

  const fetchGlobalMarketStatus = async () => {
    try {
      setCards(true);
      const responseData = await fetch(
        `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=${randomString}`
      );
      const resdata = await responseData.json();
      setMainData(resdata.markets);
    } catch (error) {
      setError(true);
      console.log("Error = ", error);
    }
  };
  const fetchGlobalSearch = debounce(async (text) => {
    setCards(false);
    try {
      const responseData = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text}&apikey=${randomString}`
      );
      const resdata = await responseData.json();
      console.log(resdata.bestMatches);
      setMainData(resdata.bestMatches);
      // setTitle(`Your Are Watching Data of ${text} (Symbol)`);
    } catch (error) {
      setError(true);
      console.log("Error = ", error);
    }
  }, 300); // Debounce for 300 milliseconds

  const FetchCommodities = async (text) => {
    try {
      const responseData = await fetch(
        `https://www.alphavantage.co/query?function=${text}&interval=monthly&apikey=${randomString}`
      );
      const resdata = await responseData.json();
      // setStockData(resdata.data);
      const sliced = resdata.data.slice(0, 15);
      // console.log(sliced);
      setTitle(`Your Are Watching Data of ${text}`);
      setStockData(sliced);
      setCommodities(true);
      // setMainData(resdata.markets);
    } catch (error) {
      setError(true);
      console.log("Error = ", error);
    }
  };

  useEffect(() => {
    fetchStockData();
    fetchGlobalMarketStatus();
  }, []);

  return (
    <DataContext.Provider
      value={{
        handleDetails,
        time,
        cards,
        setTime,
        fetchGlobalSearch,
        FetchCommodities,
        Loading,
        handleSearchResult,
        stock,
        setStockData,
        mainData,
        setMainData,
        ChangeChart,
        setChangeChart,
        search,
        setSearch,
        randomString,
        Error,
        setError,
        Title,
        Commodities,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
