import React from "react";
import { useEffect, useState } from "react";
import { restaurant } from "../../constants";

const useRestaurantList = () => {
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [allRestaurantList, setAllRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.967437781392185&lng=77.69412226974964"
      );
      const json = await data.json();
      setAllRestaurantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilterRestaurantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(json);
      console.log(allRestaurantList);
      console.log(filterRestaurantList);
    } catch (error) {
      console.error("Error:", error);
      setAllRestaurantList(
        restaurant?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurantList(
        restaurant?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  }

  return [allRestaurantList, filterRestaurantList, setFilterRestaurantList];
};

export default useRestaurantList;
