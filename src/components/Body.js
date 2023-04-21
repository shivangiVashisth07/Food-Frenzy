import React from "react";
import restaurant from "../../constants";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurantList from "../Utils/UseRestaurantList";
import useOnline from "../Utils/useOffline";
import { filterList } from "../Utils/helper";
//Body
const Body = function () {
  const [searchText, setSearchText] = useState("");
  const [allRestaurantLists, filterRestaurantLists, setFilterRestaurantLists] =
    useRestaurantList();

  const mode = useOnline();

  if (!mode) {
    return (
      <div>
        <h1 className="offlineText">
          Oops! It appears that you are currently offline. Please connect to the
          internet to continue
        </h1>
        ;
      </div>
    );
  }

  if (!allRestaurantLists) return null;

  return allRestaurantLists.length === 0 ? (
    <Shimmer />
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
            const filteredData = filterList(searchText, allRestaurantLists);
            setFilterRestaurantLists(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="cards">
        {filterRestaurantLists.length === 0 ? (
          <h1 className="notFound">
            <strong>No restaurant matches your filter!!</strong>
          </h1>
        ) : (
          filterRestaurantLists.map((restaurants) => {
            return (
              <Link
                to={"/restaurant/" + restaurants.data.id}
                key={restaurants.data.id}
              >
                {" "}
                <RestaurantCard {...restaurants.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
