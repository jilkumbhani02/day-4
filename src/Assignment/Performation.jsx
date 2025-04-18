import React, { lazy, Suspense, useState } from "react";

const Loader = lazy(() => import("./Load"));

const Performation = () => {
  const [load, setLoad] = useState(false);

  return (
    <>
      <div>
        <button className="btn btn-success m-5" onClick={() => setLoad(true)}>
          Click to Load Data
        </button>
        <button onClick={() => setLoad(false)} className="btn btn-danger m-5">
          Remove
        </button>
      </div>
      {load === true && (
        <Suspense fallback="...Loading">
          <Loader />
        </Suspense>
      )}
    </>
  );
};

export default Performation;
