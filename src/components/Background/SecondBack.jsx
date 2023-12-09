import React from "react";

import bgimage from "../../assets/background.jpg";

export default function SecondBack() {
  return (
    <>
      {bgimage ? (
        <div
          style={{
            position: "fixed",
            width: "100vh",
          }}
        >
          <img
            id="background-img"
            src={bgimage}
            alt={""}
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: "0",
              left: "0",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
