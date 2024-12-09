import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const FilterData = (searchInput, allRestaurants) => {
    const FilteredData = allRestaurants.filter((restaurant) => {
        return restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase());
    })
    return FilteredData;
};

const Body = () => {
const [searchInput, setSearchInput] = useState("");
const [allRestaurants, setAllRestaurants] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//empty dependency array => once after render
//dep array [searchInput] => once after render + everytime after render (when searchInput changes)
useEffect(() => {
    getRestaurants();
}, []);

async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();    
    console.log(json);
    // Optional chaining
    setAllRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    console.log("useEffect()");
};

console.log("render()");

// conditional rendering
// if restaurant is empty, => shimmer UI
// if restaurant has data => actual data UI

// not return component (early return)
if (!allRestaurants) return null;

if(filteredRestaurants.length === 0) return<h1>No restaurant matches your filter!</h1>;
  
return (allRestaurants.length === 0) ? <Shimmer /> : (
 <>
 <div className="search-bar">
   <input 
       className="search-input"
       placeholder="Search"
       value={searchInput}
       onChange={(e)=> setSearchInput(e.target.value)}
   />
   <button
       className="search-button"
       onClick={() => {
           const data = FilterData(searchInput, allRestaurants);
           setFilteredRestaurants(data);                  
       }}
   >Search</button>
 </div>
 <div className="body">
     {filteredRestaurants.map((restaurant) => {
         return <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>;
     })
     }
 </div>
 </>
);
};

export default Body;