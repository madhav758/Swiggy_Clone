import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError()
    console.log(err, "error")

    return (
        <div >

            <h1>opps!!!!There was an error.</h1>
            <h1>{err.status}</h1>
            <h1>{err.statusText}</h1>
            <h1>{err.error.message}</h1>

        </div>
    )
}

export default Error