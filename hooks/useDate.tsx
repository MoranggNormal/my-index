import { useEffect, useState } from "react"


const useDate = () => {

    const [hour, setHour] = useState(new Date())

    const weekDays: string[] = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    useEffect(() => {
        setInterval(() => {
            setHour( () => new Date())
        }, 1000)
    }, [])

    return(
        <>
            {hour.toLocaleTimeString()} - {weekDays[hour.getDay()]}, {hour.toLocaleDateString()}
        </>
    )
}

export default useDate