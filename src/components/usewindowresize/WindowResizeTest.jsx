import React from "react";
import useWindowResize from "./usewindowresize";

const WindowResizeTest = () => {
  const { width, height } = useWindowResize();
  return (
    <div>
      <h1>Window resize test</h1>
      <p>Width : {width} </p>
      <p>Height : {height} </p>
    </div>
  );
};

export default WindowResizeTest;
