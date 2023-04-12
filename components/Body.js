import React from "react";
import restaurant from "../constants";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";

//Restaurant card
function filterList(searchText, allRestaurantList) {
  const filterData = allRestaurantList.filter((rest) =>
    rest?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
//Body
const Body = function () {
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
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
    console.log(allRestaurantList);
  }

  return allRestaurantList.length === 0 ? (
    <>
      {[1, 2, 3, 4, 5].map((n) => (
        <Shimmer key={n} />
      ))}
    </>
  ) : (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          name="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        ></input>
        <button
          type="submit"
          onClick={() => {
            const newList = filterList(searchText, allRestaurantList);
            console.log(newList);
            setFilterRestaurantList(newList);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards">
        {filterRestaurantList.length === 0 ? (
          <h1 className="notFound">
            <strong>No restaurant matches your filter!!</strong>
          </h1>
        ) : (
          filterRestaurantList.map((restaurants) => {
            return (
              <RestaurantCard {...restaurants.data} key={restaurants.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
