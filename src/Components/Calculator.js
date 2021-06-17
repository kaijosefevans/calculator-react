import React, { useState } from "react"
import Buttons from "./Buttons"

function Calculator() {
  let [data, setData] = useState('');
  return (
    <div className="calculator">
      <input id="display" type="text" value={data} disabled/>
      <Buttons addInput={(input) => setData(data += input)} clearData={() => setData('')} evaluateAnswer={(result) => setData(data = result)} displayData={data}/>
    </div>
  );
}

export default Calculator;