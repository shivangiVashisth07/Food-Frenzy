import React from "react";
import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [allRestaurantList, setAllRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.967437781392185&lng=77.69412226974964&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  }

  return [allRestaurantList, filterRestaurantList, setFilterRestaurantList];
};

export default useRestaurantList;
