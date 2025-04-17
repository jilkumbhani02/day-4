import React, { memo, useRef } from "react";

const Rmemo = () => {
  const ref = useRef(0);

  return (
    <div>
      {/* <h2>{data}</h2> */}
      <h1>component 2</h1>
      <h2>this is rendered {ref.current++} times</h2>
    </div>
  );
};

export default memo(Rmemo);

// React.memo = for stop unnecessary re-renders of functional components
// when their props haven't changed
