import React, { useState } from "react"
import Buttons from "./Buttons"

function Calculator() {
  let [data, setData] = useState('');
  // function Display() {
  //   return (
  //     <h1>{data}</h1>
  //   );
  // }
  return (
    <div className="calculator">
      <input id="display" type="text" value={data} disabled/>
      <Buttons addInput={(input) => setData(data += input)} clearData={() => setData('')}/>
    </div>
  );
}

export default Calculator;