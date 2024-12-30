import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({name, cuisines, sla, cloudinaryImageId, userContent1}) => {
    // console.log(restaurant);
    const {user} = useContext(UserContext);
    return(
        <div className="restaurant-card w-52 p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL +
                cloudinaryImageId}/>
            <h1 className="font-bold text-xl">{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>Delivery Time:{sla.deliveryTime} minutes</h3>
            {/* <h4>{userContent1.name}</h4> */}
            <h1 className="font-bold">{user.name} - {user.email}</h1>
        </div>
    );
};

export default RestaurantCard;