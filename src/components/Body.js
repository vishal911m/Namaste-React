import { useContext, useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { SWIGGY_API_URL } from "../utils/constants";
import { FilterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = ({userContent}) => {
const [searchInput, setSearchInput] = useState("");
const [allRestaurants, setAllRestaurants] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const [isLoaded, setIsLoaded] = useState(true);
const searchBtnCSS = { 
    backgroundColor: "red"
}
const {user, setUser} = useContext(UserContext);

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
    // setAllRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    //Changed code as the "Profiler" feature from react dev tools throws error
    const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
    console.log("useEffect()");
};

// const isOnline = useOnline();

// if (!isOnline) {
//     return <h1>Offline, please check your internet connection!</h1>
// }

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
 <div className="search-bar p-1 bg-pink-50 m-1">
   <input 
       className="focus:bg-green-200 p-2 m-2"
    //    style={searchBtnCSS}
       data-testid="search-input"
       placeholder="Search"
       value={searchInput}
       onChange={(e)=> setSearchInput(e.target.value)}
   />
   <button
    //    className="search-button"
        // style={searchBtnCSS}
        data-testid="search-btn"
        className="p-2 m-2 bg-purple-400 rounded-lg hover:bg-purple-600"
       onClick={() => {
           const data = FilterData(searchInput, allRestaurants);
           setFilteredRestaurants(data);                  
       }}
   >Search</button>
   <input value={user.name} onChange={ e => setUser({
    ...user,
    name: e.target.value
   })}></input>
   <input value={user.email} onChange={ e => setUser({
    ...user,
    email: e.target.value,
   })}></input>
 </div>
 <div className="flex flex-wrap" data-testid="res-list">
     {filteredRestaurants.map((restaurant) => {
         return (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> 
                <RestaurantCard  {...restaurant.info} userContent1={userContent}/>
            </Link>
         );
     })
     }
 </div>
 </>
);
};

export default Body;