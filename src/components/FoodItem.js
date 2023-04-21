import React from "react";
import { IMG_CDN_URL } from "../../constants";

const FoodItem = ({ name, description, price, imageId }) => {
  return (
    <div className="foodCard">
      <div className=" card-details">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <h4>Price: ₹{price / 100}</h4>
      </div>
      <div className="imageCard">
        <img src={IMG_CDN_URL + imageId}></img>
        <br />
      </div>
    </div>
  );
};

export default FoodItem;
