import React from "react";
import Errors from "../Images/error.png";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="errorPage">
      <h1>Oops!!</h1>
      <h1>Looks like something went wrong...</h1>

      <img src={Errors} alt="Error" />
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};

export default Error;
