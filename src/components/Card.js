import { IMAGE_BASE_URL } from "../utils/constants";

const CardComponent= (props)=>{
    props= props.restraunt;
    let imgsrc= IMAGE_BASE_URL+props.info.cloudinaryImageId;
    return (
        <div className='card'>
            <img src={imgsrc}/>
            <h3>{props.info.name}</h3>
            <h5>{props.info.avgRating}</h5>
            <h4>{props.info.areaName}</h4>
        </div>
    )
}

export default CardComponent;