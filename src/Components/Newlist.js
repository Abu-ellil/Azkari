import React, { useEffect, useState } from "react";
import { Azkar } from "./DataList";

const NewList = () => {
  const [clk, setClk] = useState(1);
const [selectedItemIndex, setSelectedItemIndex] = useState(null);



  const azk = Azkar.content;

  function handleClick(index, clickedRepeat) {

    setClk(clk + 1);
    if (parseInt(clk) === parseInt(clickedRepeat)) {

       setSelectedItemIndex(index);
      setClk(1);

    }
  }

  return (
    <div>
      {azk.map((item, index) => (
        <div
          className="d-flex border-bottom mx-3 my-1"
          style={{
            backgroundColor:
              selectedItemIndex === index ? "rgba(0, 222, 0,0.2)" : "white",
          }}
        >
          <div>
            <p onClick={() => handleClick(index, item.repeat)}>{item.zekr}</p>
            <p className="d-inline fs-3">{item.repeat}</p>

            <h4 className="bless">{item.bless}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewList;
