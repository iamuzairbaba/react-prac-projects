import React, { useRef, useState } from "react";
import useOutsideClick from "./UseOutsideClick";

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, ()=> setShowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is Content</h1>
          <p>Please click outside to close</p>
          <h3>goodbye</h3>
        </div>
      ) : (
        <button onClick={()=>setShowContent(true)}>ShowContent</button>
      )}
    </div>
  );
};

export default UseOutsideClickTest;
