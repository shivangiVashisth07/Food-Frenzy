import React from "react";

const RestaurantCard = function (props) {
  return (
    <>
      <div className="restaurantCard">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            props.cloudinaryImageId
          }
        />
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
