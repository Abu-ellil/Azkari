import React, { useEffect, useState } from "react";

const AzkarData = () => {
  const [azk, setData] = useState([]);
  const [back, setBack] = useState(" px-5 py-5");
  const [count, setCount] = useState(1);
  const [repea, setRepea] = useState(0);

  useEffect(() => {
    fetch("https://ahegazy.github.io/muslimKit/json/azkar_massa.json")
      .then((response) => response.json())
      .then((data) => {
        data.content.map((zikrItem)=>{
            console.log(zikrItem.repeat.va);
            setRepea(zikrItem.repeat); 
        });
    
        const azk = data.content;
        setData(azk);
      });
  }, []);


  const clicked = (repea) => {
    setCount(count + 1);
    console.log('sdadasd');
    console.log(repea);
    if (repea) {
      setBack("gree px-5 py-5");
    }
  };

  return (
    <div>
      {azk.map((item) => (
        <div className="d-flex border-bottom mx-3 my-1">
        
          <div className={back}>
            <p onClick={clicked} className="fs-6">
              {item.zekr}
            </p>
            <p className="d-inline fs-3">{item.repeat}</p>

            <h4 className="bless">{item.bless}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AzkarData;
