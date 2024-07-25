import React from "react";
import Menuitem from "./menuitem";

const Menulist = ({ list = [] }) => {
  return (
    <ul className="menulist-container">
      {list && list.length ? list.map((item) => <Menuitem item={item}/>) : null}
    </ul>
  );
};

export default Menulist;
