import React, { useState } from "react";
import Rmemo from "./Rmemo";

const Counter = () => {
  const [data, setData] = useState(0);

  return (
    <div>
      <h1>components 1</h1>
      <h2>{data}</h2>
      <button onClick={() => setData(data + 1)}>increment</button>
      <Rmemo />
    </div>
  );
};

export default Counter;
