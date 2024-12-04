import { useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const FilterData = (searchInput, restaurants) => {
    const FilteredData = restaurants.filter((restaurant) => {
        return restaurant.info.name.includes(searchInput);
    })
    return FilteredData;
};

const Body = () => {
const [searchInput, setSearchInput] = useState("");
const [restaurants, setRestaurants] = useState(restaurantList);
    return(
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
                    const data = FilterData(searchInput, restaurants);
                    setRestaurants(data);                  
                }}
            >Search</button>
        </div>
        <div className="body">
            {/* <RestaurantCard restaurant={restaurantList[0].info}/>
            <RestaurantCard restaurant={restaurantList[1].info}/>
            <RestaurantCard restaurant={restaurantList[2].info}/>
            <RestaurantCard restaurant={restaurantList[3].info}/>
            <RestaurantCard restaurant={restaurantList[4].info}/>
            <RestaurantCard restaurant={restaurantList[5].info}/>
            <RestaurantCard restaurant={restaurantList[6].info}/>
            <RestaurantCard restaurant={restaurantList[7].info}/> */}
            {
            restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.info}/>;
            })
            }
        </div>
        </>
    );
};

export default Body;