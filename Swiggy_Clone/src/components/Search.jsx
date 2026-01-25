import React from 'react'

function Search({ resArr, setAllResArr }) {
    function handleSearch(searchedText) {
        setAllResArr(resArr.filter((restaurant) => { return restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()) }))
    }
    return (
        <div>
            <input placeholder='Search' onChange={(e) => handleSearch(e.target.value)} type="text" className='border p-2 w-62 rounded-2xl' />
        </div>
    )
}

export default Search