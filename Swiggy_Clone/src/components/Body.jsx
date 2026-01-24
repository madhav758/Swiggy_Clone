import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'


function Body() {
    let resArr = ApiCalling();

    const [allResArr, setAllResArr] = useState(resArr); //can take time 

    //to chnage button on click 
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);


    useEffect(() => {
        if (resArr && resArr.length) {
            setAllResArr(resArr);
        }
    }, [resArr])
    // console.log(resArr);

    function filterTopRestaurants(resArr) {
        setAllResArr(resArr.filter((restaurant) => restaurant.info.avgRating >= 4.3));
        setIsClicked1(true);
        setIsClicked2(false);
    }
    function reset() {
        setAllResArr(resArr);
        setIsClicked2(true);
        setIsClicked1(false);
    }


    return (
        <div>
            <div className='w-10/12 m-auto'>
                <h1 className='text-2xl font-bold my-6'>Restaurants with online food delivery in Delhi</h1>

                <div className='flex gap-2'>
                    <button onClick={() => filterTopRestaurants(resArr)} type="button" className={isClicked1 ? "bg-amber-200 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none flex" : "text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none flex"}>Rating 4.3+</button>
                    <button onClick={() => reset(resArr)} type="button" className={isClicked2 ? " bg-amber-200 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none flex" : "text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none flex"}>Reset</button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-10/12 m-auto'>
                <RestaurantCard resArr={allResArr} />
            </div>

        </div>
    )
}

export default Body