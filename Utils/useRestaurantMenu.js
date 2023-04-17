import React from "react";
import { useState, useEffect } from "react";
import { Menu_Details_URL } from "../constants";

const useRestaurantMenu = (id) => {
  const [details, setDetails] = useState({});
  const [menuDetails, setMenuDetails] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    const details = await fetch(Menu_Details_URL + id + "&submitAction=");
    const json = await details.json();

    setMenuDetails(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(menuDetails);
    setDetails(json?.data?.cards[0]?.card?.card?.info);
  }
  return [details, menuDetails];
};

export default useRestaurantMenu;
