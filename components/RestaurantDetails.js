import React, { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [details, setDetails] = useState({});
  const [menuDetails, setMenuDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    const details = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.967437781392185&lng=77.69412226974964&restaurantId=" +
        id +
        "&submitAction="
    );
    const json = await details.json();

    setMenuDetails(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(menuDetails);
    setDetails(json?.data?.cards[0]?.card?.card?.info);
  }

  return menuDetails.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurantDetails">
      <div className="name-details">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            details.cloudinaryImageId
          }
        />
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
        <h3>Menu</h3>
        <div className="firstMenu">
          <h4>Recommended</h4>
          <ul className="Recommended">
            {menuDetails.map((item) => (
              <div key={item?.card?.info?.id} className="menuWithPrice">
                <li>{item?.card?.info?.name}</li>
                <li>₹ {item?.card?.info?.price / 100}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
