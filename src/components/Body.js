import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

const FilterData = (searchInput, allRestaurants) =>
  allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
  );

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //empty dependency array => once after render
//dep array [searchInput] => once after render + everytime after render (when searchInput changes)
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
      console.log("useEffect()");
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("render()");

  if (isLoading) return <Shimmer />;
  if (!allRestaurants) return null;
  if (filteredRestaurants.length === 0) return <h1>No restaurants match your filter!</h1>;

  return (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = FilterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
