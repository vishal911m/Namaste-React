import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({name, cuisines, sla, cloudinaryImageId}) => {
    // console.log(restaurant);
    return(
        <div className="restaurant-card">
            <img src={IMG_CDN_URL +
                cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>Delivery Time: {sla.deliveryTime} minutes</h3>
        </div>
    );
};

export default RestaurantCard;