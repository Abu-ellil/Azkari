import React,{useState} from "react";
import { Azkar } from "./DataList";



function ContentList({ content }) {

const [clk, setClk] = useState(1)
const [classNM, setClassNm] = useState('para')

  function handleClick(repeat, clickedRepeat) {
    setClk(clk+1)
    console.log(clk);
    if (parseInt(clk) === parseInt(clickedRepeat)) {
        setClassNm('para gree')
      console.log(`Clicked paragraph ${repeat}`);
      setClk(1)
    }
  }

  return (
    <div>
      {content.map((item, index) => (
        <p key={index} onClick={() => handleClick(item.repeat, item.repeat)}>
          <p className={classNM}> {item.zekr}</p>
          {item.repeat}
        </p>
      ))}
    </div>
  );
}

export default ContentList;
