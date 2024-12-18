import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { SWIGGY_API_URL } from "../utils/constants";

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
const [isLoaded, setIsLoaded] = useState(true);

//empty dependency array => once after render
//dep array [searchInput] => once after render + everytime after render (when searchInput changes)
useEffect(() => {
    getRestaurants();
}, []);

async function getRestaurants() {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setIsLoaded(false);    
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
//if (!allRestaurants) return null;
if (isLoaded) return <Shimmer />;


if(filteredRestaurants.length === 0) return<h1>No restaurant matches your filter!</h1>;
  
return (
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
         return (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> 
                <RestaurantCard  {...restaurant.info}/>
            </Link>
         );
     })
     }
 </div>
 </>
);
};

export default Body;