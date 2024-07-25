import React, { useState } from "react";
import data from "./data";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (currentid) => {
    setSelected(selected === currentid ? null : currentid);
  };
  const handleMultiSelection = (currentid) => {
    let cpyMulti = [...multiple];
    const isPresent = cpyMulti.indexOf(currentid);
    if (isPresent === -1) {
      cpyMulti.push(currentid);
    } else {
      cpyMulti.splice(isPresent, 1);
    }
    setMultiple(cpyMulti);
  };
  return (
    <div className="wrapper">
      <button type="button" onClick={() => setEnableMulti(!enableMulti)}>
        {enableMulti ? "Disable Multi selection" : "Enable Multi selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataitem, index) => (
            <div className="item" key={index}>
              <div className="title">
                <h3>{dataitem.question}</h3>
                <span
                  onClick={
                    enableMulti
                      ? () => handleMultiSelection(dataitem.id)
                      : () => handleSingleSelection(dataitem.id)
                  }
                >
                  +
                </span>
              </div>
              {enableMulti
                ? multiple.indexOf(dataitem.id) !== -1 && (
                    <p className="answer">{dataitem.answer}</p>
                  )
                : selected === dataitem.id && (
                    <p className="answer">{dataitem.answer}</p>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
