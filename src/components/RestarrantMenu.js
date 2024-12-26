import { useEffect, useState } from "react";
import { IMG_CDN_URL, MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const param = useParams();
  const {id} = param
  const [restaurant, setRestaurant] = useState([]);
  const restaurantInfo = restaurant?.cards?.find((item) => item?.card?.card?.info)?.card?.card?.info;

  console.log("restaurantInfo:" , restaurantInfo);

  useEffect(()=>{
    getRestaurant();
  }, []);

  const getRestaurant = async() => {
    try {
      const data = await fetch(`${MENU_API_URL}${id}`);
      const json = await data.json();
      setRestaurant(json.data);
      console.log("API response: ",json.data);
    } catch (error) {
      console.error(error);
    }
  };

  const menuItems = restaurant?.cards
        ?.find((item) => item?.groupedCard?.cardGroupMap?.REGULAR)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.flatMap((items) => items?.card?.card?.itemCards || [] ) || [] ;
  
  console.log("MenuItems: ",menuItems);

  const menu = menuItems.map((items) => items?.card?.info?.name);

  console.log("Menu: ",menu);

  return(
    <div className="restaurant-menu">
    <div className="restaurant-details">
    <h1>Restaurant Id: {id}</h1>
    <img 
      src={`${IMG_CDN_URL}${restaurantInfo?.cloudinaryImageId}`}
      alt="logo"
      className="menu-logo"
    />
    <h2>{restaurantInfo?.name}</h2>
    <h2>{restaurantInfo?.areaName}</h2>
    <h2>{restaurantInfo?.city}</h2>
    <h2>{restaurantInfo?.costForTwoMessage}</h2>
    </div>
    <div className="menu-items">
    <h1>Menu</h1>
    <ul>
      {
        menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
    </div>
    </div>
  );
};

export default RestaurantMenu;

//cards[4].groupedCard.cardGroupMap.REGULAR.cards[6].card.card.itemCards

//cards[2].card.card.info