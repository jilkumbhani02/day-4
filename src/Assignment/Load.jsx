import React, { memo, useRef } from "react";
import { data } from "./data";

const Load = () => {
  return (
    <div>
      <>
        {data.map((item, index) => {
          return (
            <div key={index} className="d-flex justify-content-center gap-5">
              <h5 style={{ color: `${item.color}` }}>{item.color}</h5>
              <h6>{item.value}</h6>
              <div
                className="box"
                style={{
                  height: "20px",
                  width: "50px",
                  borderRadius: "10px",
                  backgroundColor: `${item.color}`,
                }}
              ></div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default memo(Load);
