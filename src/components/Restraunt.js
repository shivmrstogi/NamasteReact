import CardComponent from "./Card";
import { restaurants } from "../utils/constants";


const RestrauntComponent = () =>{
    return (
        <div className='restraunts'>
            {
                restaurants.map((item, index) => <CardComponent key={index} restraunt={item}/>)
            }
        </div>
    )
}

export default RestrauntComponent;