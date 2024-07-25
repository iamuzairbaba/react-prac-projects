import React, { useEffect, useState } from "react";
import "./loadmore.css";

const Loadmore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
      }
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  if(loading) {
    return <div>Loading...</div>
  }
  if(error !== null) {
    return <div>Something Wrong</div>
  }
  return <div className="load-more-container">
    <div className="product-container">
        {products && products.length ? products.map((product, index) => (
            <div key={product.id} className="product">
                <img src={product.thumbnail}  alt={product.title} />
                <p>{product.title}</p>
            </div>
        )):null}
    </div>
    <div className="btn-container">
        <button onClick={() => setCount(count + 1)}>Load More</button>
    </div>
  </div>;
};

export default Loadmore;
