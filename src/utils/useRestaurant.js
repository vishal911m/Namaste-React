import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API
  useEffect(()=>{
    getRestaurant();
  }, []);

  const getRestaurant = async() => {
    try {
      // const data = await fetch(`${MENU_API_URL}${id}`);
      const data = await fetch(MENU_API_URL + id);
      const json = await data.json();
      setRestaurant(json.data);
      console.log("API response: ",json.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Return restaurant data
  return restaurant;
};

export default useRestaurant;