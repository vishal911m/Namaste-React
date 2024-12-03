import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const FilterData = (searchInput, restaurants)=>{
 const FilteredData = restaurants.filter((restaurant)=>{
  return restaurant.info.name.includes(searchInput); 
 });
 return FilteredData;
};

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
    return(
      <>
      <div className="search-container">
        <input 
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e)=> {setSearchInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={()=>{
            const data = FilterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >Submit</button>
      </div>
      <div className="card">
        {restaurants.map((restaurant)=>{
          return <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
        })}
      </div>
      </>
    );
  };

  export default Body;