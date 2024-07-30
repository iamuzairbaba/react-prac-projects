import React, { useEffect, useState } from "react";

const Usefetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();
      setData(result);
    } catch (e) {
      setError(e.message);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, pending };
};

export default Usefetch;
