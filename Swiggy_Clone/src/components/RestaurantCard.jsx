import { Link } from "react-router-dom";

function RestaurantCard({ resArr }) {
    return resArr.map((restDetail) => {
        return (
            <Link to={`/restaurant/${restDetail.info.id}`}>
                <div className='m-8' >
                    <img className='w-58 h-42 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restDetail.info.cloudinaryImageId}`} alt="Pizza Hut"></img>
                    <h3 className='font-bold text-xl'> {restDetail.info.name}</h3>
                    <span className='font-bold'>{restDetail.info.avgRating}</span>
                    <span className='px-2'>{restDetail.info.sla.slaString}</span>
                    <p className='font-extralight'>{restDetail.info.cuisines[0]}</p>
                    <p>{restDetail.info.locality}</p>
                </div>
            </Link>
        )
    })
}


export default RestaurantCard;
