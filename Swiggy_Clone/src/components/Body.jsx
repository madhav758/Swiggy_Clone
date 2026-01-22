import React from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'


function Body() {
    let resArr = ApiCalling()
    // console.log(resArr);

    return (
        <div>
            <div className='w-10/12 m-auto'>
                <h1 className='text-2xl font-bold my-6'>Restaurants with online food delivery in Delhi</h1>

                <div className='flex gap-2'>
                    <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none flex">Rating 4+</button>
                    <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none flex">Reset</button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-10/12 m-auto'>
                <RestaurantCard resArr={resArr} />
            </div>

        </div>
    )
}

export default Body