import React, { useMemo, useState } from "react";

const Sum = () => {
  const Perform = () => {
    let i;
    for (i = 1; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  //   const total = Perform();

  const total = useMemo(() => {
    return Perform();
  }, []);

  return <p>sum : {total}</p>;
};

const Usememo = () => {
  const [data, setData] = useState(0);

  return (
    <div>
      <Sum />
      <h1>components 2</h1>
      <button onClick={() => setData(data + 1)}>increment</button>
      <h3>count is {data}</h3>
    </div>
  );
};

export default Usememo;

// usememo = if not have any change in components so usememo
//  returns calculated value again in return so process dont load
