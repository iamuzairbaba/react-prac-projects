import React, { useEffect, useState } from "react";
import Search from "../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=9b84c4dd95532846e5dc350c43f9e454`
      );
      const result = await res.json();
      if (result) {
        setData(result);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  const handleSearch = () => {
    fetchWeatherData(search);
  };
  useEffect(() => {
    fetchWeatherData("Srinagar");
  }, []);
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
 


  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div
          style={{
            border: "5px solid #f3f3f3",
            borderTop: "5px solid #3498db",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            animation: "spin 2s linear infinite",
            "@keyframes": {
              spin: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            },
          }}
        ></div>
      ) : (
        <div>
          <h2>
            {data?.name},{data?.sys?.country}
          </h2>
          <div>
            <span>{getCurrentDate()}</span>
          </div>
          <div>{data?.main?.temp}<p>{data?.weather[0]?.description}</p></div>
          <div>
            <div>{data?.wind?.speed}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
