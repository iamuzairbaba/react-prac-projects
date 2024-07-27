import React, { useState } from "react";
import './dynamictabs.css'
const data = [
  { id: 1, content: "this is 1" },
  { id: 2, content: "this is 2" },
  { id: 3, content: "this is 3" },
];
const DynamicTabs = () => {
  const [selected, setSelected] = useState();
  const handleClick = (getId) => {
    setSelected(getId);
  };
  return (
    <div>
      <div className="tabs">
        <span
          className={`tab ${selected === 1 ? 'active' : ''}`}
          onClick={() => {
            handleClick(1);
          }}
        >
          Tab 1
        </span>
        <span
          className={`tab ${selected === 2 ? 'active' : ''}`}
          onClick={() => {
            handleClick(2);
          }}
        >
          Tab 2
        </span>
        <span
          className={`tab ${selected === 3 ? 'active' : ''}`}
          onClick={() => {
            handleClick(3);
          }}
        >
          Tab 3
        </span>
      </div>
      <div>
        {data.map((item, index) => 
          item.id === selected ? <p key={index} className="content">{item.content}</p> : null
        )}
      </div>
    </div>
  );
};

export default DynamicTabs;
