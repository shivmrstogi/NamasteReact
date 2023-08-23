import CardComponent from "./Card";
import { restaurants } from "../utils/constants";
import { useState } from "react";


const RestrauntComponent = () =>{

    const [restaurantsList,setrestaurantsList] = useState(restaurants);

    function filterRestraunts(){
        const filterdData = restaurantsList.filter((rest) => rest.info.avgRating>=4);
        setrestaurantsList(filterdData);
    }

    return (
        <>
        <div className='top-rated'>
            <div className='top' onClick={filterRestraunts}>
                Filter Top Rated Restaurant
            </div>
        </div>
        <div className='restraunts'>
            {
                restaurantsList.map((item, index) => <CardComponent key={index} restraunt={item}/>)
            }
        </div>
        </>
    )
}

export default RestrauntComponent;