import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL, MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
  const param = useParams();
  const {id} = param;
  const [restaurant, setRestaurant] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const restaurantInfo = restaurant?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info;
  console.log("RestaurantInfo:",restaurantInfo);


  useEffect(()=>{
    getRestaurant();
  },[])

  const getRestaurant = async() => {
    try {
      const data = await fetch(`${MENU_API_URL}${id}`);
      const json = await data.json();
      setRestaurant(json.data);
      setLoaded(false)
      console.log("API Request:", json.data);
    } catch (error) {
      
    }
  };

  const menuItem = restaurant?.cards?.find((item) => item?.groupedCard?.cardGroupMap?.REGULAR)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.flatMap((item) => item?.card?.card?.itemCards || []) || [];
  console.log("Menu Item: ",menuItem);

  const menu = menuItem.map((item) => item?.card?.info?.name) ;
  console.log("Menu : ",menu);

  if(loaded) return <Shimmer />

  return (
    <div className="restaurant-menu">
      <div>
       <h1>Restaurant id: {id}</h1>
       {
        <img 
          src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} 
          className="menu-img"
        />
       }
       <h2>{restaurantInfo?.name}</h2>
       <h2>{restaurantInfo?.areaName}</h2>
       <h2>{restaurantInfo?.city}</h2>
       <h2>{restaurantInfo?.costForTwoMessage}</h2>
      </div>

      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {
            menu.map((item, index) => (
            <li key={index}>
              {item}
            </li>
            )
          )
          }          
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;














// {menu.map((item, index) => (
//   <li key={index} className="menu-item">
   
//     {item}
  
//   </li>
// ))}