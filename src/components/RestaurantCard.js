import {IMG_CDN_URL} from "../config";

const RestaurantCard = ({name, cuisines, deliveryTime, cloudinaryImageId})=>{
    //const {name, cuisines, deliveryTime, cloudinaryImageId} = restaurant;
    return(
      <div className="body">
        <img 
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="logo"
        />
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>Delivery time: {deliveryTime} minutes </h3>
      </div>
    );
  }

export default RestaurantCard;