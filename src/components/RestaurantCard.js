import React from "react";
import { IMG_CDN_URL } from "../../constants";

const RestaurantCard = function (props) {
  return (
    <>
      <div className="restaurantCard">
        <img src={IMG_CDN_URL + props.cloudinaryImageId} />
        <h3>
          <strong>{props.name}</strong>
        </h3>
        <h4>{props.cuisines.slice(0, 4).join(",  ")} </h4>
        <h4>✩ {props.avgRating}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
