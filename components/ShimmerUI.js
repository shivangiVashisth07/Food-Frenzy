import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-cards">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index}>
            <article className="skeletonCard">
              <div className="imageBox"></div>
              <br />
              <div className="heading"></div>
              <br />
              <div className="heading"></div>
              <br />
              <div className="heading"></div>
            </article>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
