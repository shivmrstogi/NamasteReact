import CardComponent from "./Card";
import { restaurants } from "../utils/constants";
import { useState , useEffect } from "react";


const RestrauntComponent = () =>{

    const [restaurantsList,setrestaurantsList] = useState(0);
    const [resList,setresList] = useState([]);
    let func = async () => {
        let response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let data = await response.json();
        let finData= data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        result= finData;
        setresList(result);
        setrestaurantsList(result);
    }
    useEffect(()=>{
       func();
    },[])

    function filterRestraunts(){
        const filterdData = resList.filter((rest) => rest.info.avgRating>=4);
        setrestaurantsList(filterdData);
    }

    function resetRestraunts(){
        setrestaurantsList(resList);
    }

    function searchRestraunts(e)
    {
        let toFind = e.target.value.toLowerCase();
        let searchedData = resList.filter((item)=>item.info.name.toLowerCase().includes(toFind))
        setrestaurantsList(searchedData);
    }

    if(restaurantsList===0){
        return (
            <>
                <div className="loading">
                        <div>
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"/>
                        </div>
                </div>
            </>
        )
    }

    return (
        <>
        <div className='top-rated'>
            <div className='search'>
                <input type="text" placeholder="Search" onChange={searchRestraunts}/>
                {/* <button>search</button> */}
            </div>
            <div className='top' onClick={filterRestraunts}>
                Filter Top Rated Restaurant
            </div>
            <div className="reset" onClick={resetRestraunts}>
                Reset Restaurants
            </div>
        </div>
        {
            restaurantsList?.length==0 ? 
                <p>No restraunt found</p>:
                <div className='restraunts'>
                    {
                        restaurantsList?.map((item, index) => <CardComponent key={index} restraunt={item}/>)
                    }
                </div>
        }
        
        </>
    )
}

export default RestrauntComponent;