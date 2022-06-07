import { useState, useEffect, memo } from 'react'

const LastUpdated = ({ lastUpdatedString }) => {
    const [timePassed, setTimePassed] = useState('Updating')

    useEffect(() => {
        const formatLastRefreshed = (refreshTime) => {
            if (refreshTime === 'Updating') return refreshTime
            else if (refreshTime < 60) return 'Just Now'
            else if (refreshTime < 300) return '1 minute ago'
            else if (refreshTime < 3600) return `${Math.floor(refreshTime/300)*5} minutes ago`
            else return `${Math.floor(refreshTime/3600)} hours ago`
          }
        setTimePassed(formatLastRefreshed(lastUpdatedString ? (new Date().getTime() - new Date(lastUpdatedString).getTime()) / 1000 : 'Updating'))
        const updateInterval = setInterval(() => {
            setTimePassed(formatLastRefreshed(lastUpdatedString ? (new Date().getTime() - new Date(lastUpdatedString).getTime()) / 1000 : 'Updating'))
        }, 60000)
        return () => clearInterval(updateInterval)
    }, [lastUpdatedString])

    return (
        <div className='last-refreshed'>{timePassed}</div>
    )
}

export default memo(LastUpdated)