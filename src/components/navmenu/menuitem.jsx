import React, { useState } from "react";
import Menulist from "./Menulist";
import { FaPlus, FaMinus } from "react-icons/fa";

const Menuitem = ({ item }) => {
  const [displaychild, setDisplaychild] = useState({});
  const handleToggle = (currentlabel) => {
    setDisplaychild({
        ...displaychild,
        [currentlabel] : !displaychild[currentlabel]
    })
  }

  console.log(displaychild);
  return (
    <li className="menuitem">
      <div style={{display: "flex", gap: '10px', alignItems: "center"}}>
        <p>{item.label}</p>
        {item && item.children && item.children.length && <span onClick={() => handleToggle(item.label)}>
            {displaychild[item.label] ? <FaMinus /> : <FaPlus />}
            </span>}
      </div>

      {item && item.children && item.children.length > 0 && displaychild[item.label] ? (
        <p>
          <Menulist list={item.children} />
        </p>
      ) : null}
    </li>
  );
};

export default Menuitem;
