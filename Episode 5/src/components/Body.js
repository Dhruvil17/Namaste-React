import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //Superpowerful State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [searchRestaurant, setSearchRestaurant] = useState(null);

    return (
        <div className="body">
            <input
                type="text"
                placeholder="Search Restaurant"
                className="search-bar"
                onChange={(event) => {
                    setSearchRestaurant(event.target.value);
                }}
            />
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.info.avgRating >= 4.5
                        );
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard
                        data={restaurant}
                        key={restaurant.info.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
