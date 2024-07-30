import React, { useRef } from "react";
import UseFetch from "../usefetch/Usefetch";

const ScrollToTopOrBottom = () => {
  const { data, pending, error } = UseFetch(
    "http://dummyjson.com/products?limit=200",
    {}
  );
  const bottomref = useRef();
  function handleScrollToBottom() {
    bottomref.current.scrollIntoView({behavior: "smooth"});
  }
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>Scroll To Top Or bottom</h1>
      <h3>This is Top Section</h3>
      <button onClick={() => {handleScrollToBottom()}}>SCroll To bottom</button>
      {data && data.products && data.products.length
        ? data.products.map((product) => <p>{product.title}</p>)
        : null}
      <h3>This is bottom section</h3>
      <button
        onClick={() => {
          handleScrollToTop();
        }}
      >
        Scroll To Top
      </button>
      <div ref={bottomref}></div>
    </div>
  );
};

export default ScrollToTopOrBottom;
