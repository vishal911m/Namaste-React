import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        // Fetch data from API
        const response = await fetch(`${MENU_API_URL}${id}`);
        
        // Parse the response JSON
        const json = await response.json();

        // Set restaurant data
        setRestaurant(json.data);

        // Debug logs for validation
        console.log("Raw API Response:", json);
        console.log("Transformed Restaurant Data:", json.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    getRestaurant();
  }, [id]); // Dependency on `id` ensures the hook re-runs when `id` changes

  return restaurant;
};

export default useRestaurant;


// import { useState, useEffect } from "react";
// import { MENU_API_URL } from "./constants";

// const useRestaurant = (id) => {
//   const [restaurant, setRestaurant] = useState(null);

//   //Get data from API
//   useEffect(()=>{
//     getRestaurant();
//   }, []);

//   const getRestaurant = async() => {
//     try {
//       const data = await fetch(`${MENU_API_URL}${id}`);
//       // const data = await fetch(MENU_API_URL + id);
//       const json = await data.json();
//       setRestaurant(json.data);
//       // console.log("API response: ",json.data);
//       console.log("Raw API Response:", json);
//       console.log("Transformed Restaurant Data:", json.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //Return restaurant data
//   return restaurant;
// };

// export default useRestaurant;

// import { useState, useEffect } from "react";
// import { MENU_API_URL } from "./constants";

// const useRestaurant = (id) => {
//   const [restaurant, setRestaurant] = useState(null);

//   useEffect(() => {
//     const fetchRestaurantData = async () => {
//       try {
//         const response = await fetch(`${MENU_API_URL}${id}`);
//         const data = await response.json();

//         console.log("Raw API Response:", data);

//         const menuData =
//           data?.data?.cards.find(
//             (card) => card?.groupedCard?.cardGroupMap?.REGULAR
//           )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//         const menuItems = menuData
//           .flatMap((card) => card?.card?.card?.itemCards || [])
//           .map((item) => item.card.info);

//         console.log("Transformed Restaurant Data:", data.data);
//         console.log("Extracted Menu Items:", menuItems);

//         setRestaurant({ ...data.data, menuItems });
//       } catch (error) {
//         console.error("Failed to fetch restaurant data:", error);
//       }
//     };

//     fetchRestaurantData();
//   }, [id]);

//   return restaurant;
// };

// export default useRestaurant;