import React, { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import UseRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [details, menuDetails] = UseRestaurantMenu(id);

  return menuDetails.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurantDetails">
      <div className="name-details">
        <img src={IMG_CDN_URL + details.cloudinaryImageId} />
        <h3>
          <strong>{details.name}</strong>
        </h3>
        <h4>{details?.cuisines?.slice(0, 4).join(",  ")} </h4>
        <h4>{details.areaName}</h4>

        <h4>✩ {details.avgRating} </h4>
        <h4>{details.totalRatingsString}</h4>
        <h4>{details.costForTwoMessage}</h4>
      </div>
      <div className="Menu">
        <h2>Menu</h2>
        <div className="firstMenu">
          <div className="recommended">
            {menuDetails.map((item) => (
              <>
                <div key={item?.card?.info?.id} className="menuWithPrice">
                  <div className="description">
                    <h3>{item?.card?.info?.name}</h3>
                    <h5>{item?.card?.info?.description}</h5>
                    <h4>₹ {item?.card?.info?.price / 100}</h4>
                  </div>
                  <div className="itemImage">
                    <img src={IMG_CDN_URL + item?.card?.info?.imageId} />
                    <br />
                    <button className="add">Add</button>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
