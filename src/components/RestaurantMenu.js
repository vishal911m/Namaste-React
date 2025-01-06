import { useState, useEffect } from "react"; 
import { IMG_CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer"; // Import Shimmer component
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams(); // Get restaurant ID from URL
  const restaurant = useRestaurant(id); // Fetch restaurant data using custom hook

  // Show shimmer while `restaurant` is null
  // if (!restaurant) {
  //   return <Shimmer />;
  // }

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // Extract restaurant info
  const restaurantInfo = restaurant?.cards?.find(
    (item) => item?.card?.card?.info
  )?.card?.card?.info;

  // Extract menu items
  const menuItems =
    restaurant?.cards
      ?.find((item) => item?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.flatMap((items) => items?.card?.card?.itemCards || []) || [];
  // console.log("MenuItems", menuItems);

  // Extract menu objects
  // console.log("Menu Items Before Mapping:", menu);
  const menu = menuItems.map((items) => items?.card?.info);
  // console.log("Menu ", menu);

  // console.log("Restaurant Data:", restaurant);
  // console.log("Extracted Menu Items:", menuItems);

  console.log("Restaurant Data:", JSON.stringify(restaurant, null, 2));
  console.log("Extracted Menu Items:", menuItems);

  return (
    <div className="flex flex-col items-center p-4">
      {/* Restaurant Details Section */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Restaurant ID: {id}
        </h1>
        {restaurantInfo && (
          <div className="text-center">
            <img
              src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`}
              alt="Restaurant Logo"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">{restaurantInfo.name}</h2>
            <p className="text-gray-500">{restaurantInfo.areaName}, {restaurantInfo.city}</p>
            <p className="text-gray-500">{restaurantInfo.costForTwoMessage}</p>
          </div>
        )}
      </div>

      {/* Menu Items Section */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Menu</h1>
        <ul className="space-y-2" data-testid="menu">
          {menu.length > 0 ? (
            menu.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item?.name}</span>
                    {item?.price && (
                      <span className="text-gray-500 ml-2">
                        ₹{item?.price / 100}
                      </span>
                    )}
                  </div>
                  <button
                    data-testid="addBtn"
                    className="p-1 bg-green-100 rounded-md"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No menu items available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;


// import { useState, useEffect } from "react"; 
// import { IMG_CDN_URL } from "../utils/constants";
// import { useParams } from "react-router";
// import useRestaurant from "../utils/useRestaurant";
// import Shimmer from "./Shimmer"; // Import Shimmer component
// import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";

// const RestaurantMenu = () => {
//   const { id } = useParams(); // Get restaurant ID from URL
//   const restaurant = useRestaurant(id); // Fetch restaurant data using custom hook

//   // Show shimmer while `restaurant` is null
//   if (!restaurant) {
//     return <Shimmer />;
//   }

//   const dispatch = useDispatch();

//   // const handleClick = () => {
//   //   dispatch(addItem("Grapes"));
//   // };

//   const addFoodItem = (item) => {
//     dispatch(addItem(item));
//   };

//   // Extract restaurant info
//   const restaurantInfo = restaurant?.cards?.find(
//     (item) => item?.card?.card?.info
//   )?.card?.card?.info;

//   // Extract menu items
//   const menuItems =
//     restaurant?.cards
//       ?.find((item) => item?.groupedCard?.cardGroupMap?.REGULAR)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       ?.flatMap((items) => items?.card?.card?.itemCards || []) || [];
//   console.log("MenuItems", menuItems);

//   // Extract menu names
//   const menu = menuItems.map((items) => items?.card?.info?.name);
//   console.log("Menu ",menu);

//   return (
//     <div className="flex flex-col items-center p-4">
//       {/* Restaurant Details Section */}
//       <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl mb-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">
//           Restaurant ID: {id}
//         </h1>
//         {restaurantInfo && (
//           <div className="text-center">
//             <img
//               src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`}
//               alt="Restaurant Logo"
//               className="w-32 h-32 mx-auto rounded-full mb-4"
//             />
//             <h2 className="text-xl font-semibold text-gray-700">{restaurantInfo.name}</h2>
//             <p className="text-gray-500">{restaurantInfo.areaName}, {restaurantInfo.city}</p>
//             <p className="text-gray-500">{restaurantInfo.costForTwoMessage}</p>
//           </div>
//         )}
//       </div>
//       {/* <div className="p-2 m-5 bg-green-100" onClick={()=> handleClick()}>Add Item</div> */}

//       {/* Menu Items Section */}
//       <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-2xl">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Menu</h1>
//         <ul className="space-y-2">
//           {menu.length > 0 ? (
//             menu.map((item, index) => (
//               <li key={index} className="text-gray-700 p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
//                 {item} - <button className="p-1 bg-green-100" onClick={()=>addFoodItem(item)}> Add</button>
//               </li>
//             ))
//           ) : (
//             <li className="text-gray-500">No menu items available</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;


// import { useState, useEffect } from "react"; 
// import { IMG_CDN_URL } from "../utils/constants";
// import { useParams } from "react-router";
// import useRestaurant from "../utils/useRestaurant";
// import Shimmer from "./Shimmer"; // Import Shimmer component

// const RestaurantMenu = () => {
//   const { id } = useParams(); // Get restaurant ID from URL
//   const restaurant = useRestaurant(id); // Fetch restaurant data using custom hook

//   // Show shimmer while `restaurant` is null
//   if (!restaurant) {
//     return <Shimmer />;
//   }

//   // Extract restaurant info
//   const restaurantInfo = restaurant?.cards?.find(
//     (item) => item?.card?.card?.info
//   )?.card?.card?.info;

//   // Extract menu items
//   const menuItems =
//     restaurant?.cards
//       ?.find((item) => item?.groupedCard?.cardGroupMap?.REGULAR)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       ?.flatMap((items) => items?.card?.card?.itemCards || []) || [];

//   // Extract menu names
//   const menu = menuItems.map((items) => items?.card?.info?.name);

//   return (
//     <div className="restaurant-menu">
//       {/* Restaurant Details Section */}
//       <div className="restaurant-details">
//         <h1>Restaurant Id: {id}</h1>
//         {restaurantInfo && (
//           <>
//             <img
//               src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`}
//               alt="Restaurant Logo"
//               className="menu-logo"
//             />
//             <h2>{restaurantInfo.name}</h2>
//             <h2>{restaurantInfo.areaName}</h2>
//             <h2>{restaurantInfo.city}</h2>
//             <h2>{restaurantInfo.costForTwoMessage}</h2>
//           </>
//         )}
//       </div>

//       {/* Menu Items Section */}
//       <div className="menu-items">
//         <h1>Menu</h1>
//         <ul>
//           {menu.length > 0 ? (
//             menu.map((item, index) => <li key={index}>{item}</li>)
//           ) : (
//             <li>No menu items available</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
