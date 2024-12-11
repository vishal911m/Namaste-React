import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  //console.log(params);
  const {id} = params
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  },[id])

  async function getRestaurantInfo() {
    const data = await fetch(
      //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=889711&catalog_qa=undefined&submitAction=ENTER" 
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId=" + id 
    );
    
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  return (!restaurant) ? <Shimmer /> :  (
  <div className="menu">
    <div>
    <h1>Restaurant id: {id}</h1>
    <h2>{restaurant.cards?.[2]?.card?.card?.info?.name }</h2>
    {restaurant.cards?.[2]?.card?.card?.info?.cloudinaryImageId ? (
        <img className="restaurant-card"
          src={IMG_CDN_URL + restaurant.cards[2].card.card.info.cloudinaryImageId}
          alt="Restaurant Image"
        />
      ) : (
        <p>Image not available</p>
      )}
    <h3>{restaurant.cards?.[2]?.card?.card?.info?.locality }</h3>
    <h3>{restaurant.cards?.[2]?.card?.card?.info?.city }</h3>
    <h3>{restaurant.cards?.[2]?.card?.card?.info?.avgRating }</h3>
    <h3>{restaurant.cards?.[2]?.card?.card?.info?.costForTwoMessage }</h3>
    </div> 
    <div>
      <h1>Menu</h1>
      <ul>
        {restaurant?.cards?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap((menuCard) =>
            menuCard.card?.card?.itemCards || []
          )
          ?.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          )) || <p>No menu items available</p>}
      </ul>
    </div>

  </div>
);
};

export default RestaurantMenu;