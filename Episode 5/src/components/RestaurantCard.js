import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { data } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
        data.info;
    const { deliveryTime } = sla;
    return (
        <div className="restaurant-card">
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="food-image"
                className="food-image"
            />
            <h3 className="Restaurant-Name">{name}</h3>
            <h4 className="Crusine">{cuisines.join(", ")}</h4>
            <h4 className="Rating">{avgRating} stars</h4>
            <h4 className="CostForTwo">{costForTwo}</h4>
            <h4 className="Delivery-Time">{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
