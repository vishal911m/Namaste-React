// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { IMG_CDN_URL, MENU_API_URL, SWIGGY_API_URL } from "../utils/constants";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const params = useParams();
//   //console.log(params);
//   const {id} = params
//   const [restaurant, setRestaurant] = useState(null);

//   useEffect(() => {
//     getRestaurantInfo();
//   },[id])

//   async function getRestaurantInfo() {
//     const data = await fetch(
//       //`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
//       MENU_API_URL + id 
//     );
    
//     const json = await data.json();
//     console.log(json);
//     setRestaurant(json.data);
//   }

//   return (!restaurant) ? <Shimmer /> :  (
//   <div className="menu">
//     <div>
//     <h1>Restaurant id: {id}</h1>
//     <h2>{restaurant.cards?.[2]?.card?.card?.info?.name }</h2>
//     {restaurant.cards?.[2]?.card?.card?.info?.cloudinaryImageId ? (
//         <img className="restaurant-card"
//           src={IMG_CDN_URL + restaurant.cards[2].card.card.info.cloudinaryImageId}
//           alt="Restaurant Image"
//         />
//       ) : (
//         <p>Image not available</p>
//       )}
//     <h3>{restaurant.cards?.[2]?.card?.card?.info?.locality }</h3>
//     <h3>{restaurant.cards?.[2]?.card?.card?.info?.city }</h3>
//     <h3>{restaurant.cards?.[2]?.card?.card?.info?.avgRating }</h3>
//     <h3>{restaurant.cards?.[2]?.card?.card?.info?.costForTwoMessage }</h3>
//     </div> 
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         {restaurant?.cards?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR)
//           ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap((menuCard) =>
//             menuCard.card?.card?.itemCards || []
//           )
//           ?.map((item) => (
//             <li key={item.card.info.id}>{item.card.info.name}</li>
//           )) || <p>No menu items available</p>}
//       </ul>
//     </div>

//   </div>
// );
// };

// export default RestaurantMenu;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL, MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  // Fetch restaurant data
  async function getRestaurantInfo() {
    try {
      const data = await fetch(`${MENU_API_URL}${id}`);
      const json = await data.json();
      setRestaurant(json.data);
      console.log(json.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  // Extract restaurant info
  const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info;

  // Extract menu items
  const menuItems =
    restaurant?.cards
      ?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (menuCard) => menuCard.card?.card?.itemCards || []
      ) || [];
   //const menu = menuItems.map((item)=> item.card.info.name);



   
      


  const menuItems1 = restaurant?.cards
      ?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (items) => items?.card?.card?.itemCards);

 

  const menu = menuItems.map((items) => items.card?.info?.name);

  //console.log(menu);
  
  // console.log(menuItems1);

  // Loading state
  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div>
        <h1>Restaurant ID: {id}</h1>
        <h2>{restaurantInfo?.name}</h2>
        {restaurantInfo?.cloudinaryImageId ? (
          <img
            className="restaurant-card"
            src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`}
            alt={`${restaurantInfo.name} Image`}
          />
        ) : (
          <p>Image not available</p>
        )}
        <h3>{restaurantInfo?.locality}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>Average Rating: {restaurantInfo?.avgRating}</h3>
        <h3>{restaurantInfo?.costForTwoMessage}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems.length > 0 ? (
            menuItems.map((item, index) => (
              <li key={`${item.card.info.id}-${index}`}>{item.card.info.name}</li>
            ))
          ) : (
            <p>No menu items available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
