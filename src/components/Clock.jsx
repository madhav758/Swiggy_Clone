import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        let id = setInterval(() => { setTime(new Date().toLocaleTimeString()) }, 1000)
        return () => clearInterval(id)
    }, [time])
    return (
        <div>
            <h1>Time:{time}</h1>
        </div>
    )
}

export default Clock