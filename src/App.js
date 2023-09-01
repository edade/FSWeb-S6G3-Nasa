import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ApodData from "./components/ApodData";
import Header from "./components/Header";
function App() {
  const [apodData, setApodData] = useState(null);
  const [date, setDate] = useState("2020-08-31");
  const changeHandler = (event) => {
    const { value } = event.target;
    setApodData(null);
    setDate(value);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((repsonse) => {
        setApodData(repsonse.data);
      })
      .catch((error) => {
        console.error("APOD Data alınamadı", error);
      });
  }, [date]);

  return (
    <div>
      <Header date={date} changeHandler={changeHandler} />
      <div className="App">
        {apodData ? <ApodData apodData={apodData} /> : <h2>Yükleniyor...</h2>}
      </div>
    </div>
  );
}

export default App;
