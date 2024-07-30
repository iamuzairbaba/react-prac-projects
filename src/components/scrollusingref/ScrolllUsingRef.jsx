import React, { useRef } from "react";
import "./scrollusingref.css";

const ScrolllUsingRef = () => {
    const firstcard = useRef();
    const secondcard = useRef();
    const thirdcard = useRef();
    const fourthcard = useRef();
    const fifthcard = useRef();
    const sixthcard = useRef();
    
  const handleScroll = (whereTo) => {
    whereTo.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <button onClick={() => handleScroll(firstcard)}>Scroll Card 1</button>
      <button onClick={() => handleScroll(secondcard)}>Scroll Card 2</button>
      <button onClick={() => handleScroll(thirdcard)}>Scroll Card 3</button>
      <button onClick={() => handleScroll(fourthcard)}>Scroll Card 4</button>
      <button onClick={() => handleScroll(fifthcard)}>Scroll Card 5</button>
      <button onClick={() => handleScroll(sixthcard)}>Scroll Card 6</button>
      <div ref={firstcard} style={{ background: "#dac123", height: "800px" }}>
        FirstCard
      </div>
      <div ref={secondcard} style={{ background: "#f22e3c", height: "800px" }}>
        SecondCard
      </div>
      <div ref={thirdcard} style={{ background: "#fdc12e", height: "800px" }}>
        ThirdCard
      </div>
      <div ref={fourthcard} style={{ background: "#bd34ac", height: "800px" }}>
        FourthCard
      </div>
      <div ref={fifthcard} style={{ background: "#ec5c2a", height: "800px" }}>
        FifthCard
      </div>
      <div ref={sixthcard} style={{ background: "ba4e3c", height: "800px" }}>
        SixthCard
      </div>
    </div>
  );
};

export default ScrolllUsingRef;
