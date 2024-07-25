import React, { useEffect, useState } from "react";
import "./colorgenerator.css";

const Colorgenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const createRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(r,g,b)

    setColor(`rgb(${r}, ${g}, ${b})`);
  };
  const createHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 15)];
      console.log(hexColor);
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") createRgbColor();
    else createHexColor();
  }, [typeOfColor]);
  return (
    <div className="container" style={{ background: color }}>
      <div>
        <button onClick={() => setTypeOfColor("hex")} className="color-btn">Create HEX color</button>
        <button
          onClick={typeOfColor === "hex" ? createHexColor : createRgbColor}
          className="generate-btn"
        >
          Generate Random Color
        </button>
        <button onClick={() => setTypeOfColor("rgb")} className="color-btn">Create RGB color</button>
      </div>
      <div className="color">
        <h3>{typeOfColor === "hex" ? "HEX color" : "RGB color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Colorgenerator;
