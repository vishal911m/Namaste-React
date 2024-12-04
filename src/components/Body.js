import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
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
            restaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant.info}/>;
            })
            }
        </div>
    );
};

export default Body;