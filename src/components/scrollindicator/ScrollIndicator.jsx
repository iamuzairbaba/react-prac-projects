import React, { useEffect, useState } from "react";
import "./scrollindicator.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showtotal, setShowtotal] = useState(0);
  async function fetchData(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  const handlePercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howMuch =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setShowtotal((howMuch / height) * 100);
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handlePercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  if (loading) {
    return <div>Loading</div>;
  }
  if (error !== null) {
    return <div>Somthing happened</div>;
  }
  return (
    <div>
      <div className="header-container">
        <h1>Scroll Indicator</h1>
        <div className="scrollindicator">
          <div className="percent" style={{ width: `${showtotal}%` }}></div>
        </div>
      </div>
      {data && data.length > 0
        ? data.map((item, index) => <p key={index}>{item.title}</p>)
        : null}
    </div>
  );
};

export default ScrollIndicator;
