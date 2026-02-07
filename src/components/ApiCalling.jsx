import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiCalling() {
    const [allRestaurantArr, setAllRestaurantArr] = useState([]);
    const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    useEffect(() => {
        async function calling() {
            let resp = await axios.get(API);
            // console.log(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants, "resp");

            setAllRestaurantArr(resp.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling()
    }, [])

    return allRestaurantArr;
}

export default ApiCalling