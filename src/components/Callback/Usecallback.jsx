import React, { memo, useCallback, useRef, useState } from "react";

const Call = memo(({ event, children }) => {
  const ref = useRef(0);
  return (
    <>
      <button onClick={event}>{children}</button>
      <p>renderd {ref.current++} times</p>
    </>
  );
});

const Usecallback = () => {
  const [data, setData] = useState(0);

  //   const increment = () => {
  //     console.log("increment");
  //     setData((prev) => prev + 1);
  //   };

  const increment = useCallback(() => {
    console.log("increment");
    setData((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>count : {data}</h1>
      <Call event={increment}>increment</Call>
    </div>
  );
};

export default Usecallback;
