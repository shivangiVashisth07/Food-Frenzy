import React from "react";

const Shimmer = () => {
  return (
    <>
      <article className="skeletonCard">
        <div>
          <div className="imageBox"></div>
          <br />
          <div className="heading"></div>
          <br />
          <div className="heading"></div>
          <br />
          <div className="heading"></div>
        </div>
        <div className="shimmer-wrapper">
          <div className="shimmer"></div>
        </div>
      </article>
    </>
  );
};

export default Shimmer;
