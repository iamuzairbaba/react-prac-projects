import React from "react";
import Usefetch from "./Usefetch";

const Test = () => {
  const { data, error, pending } = Usefetch(
    "https://dummyjson.com/products",
    {}
  );
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Loading! please wait</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map(item => <h4>{item.title}</h4>)
        : null}
    </div>
  );
};

export default Test;
