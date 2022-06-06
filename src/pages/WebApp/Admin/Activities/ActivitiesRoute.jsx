import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Route, Redirect } from 'react-router-dom'
import Introduction from './ActivityPages/Introduction'
import Planting from './ActivityPages/Planting'


// Lesson Route component to differentiate the /lessons and /lessons/{lessonId} routes
const ActivitiesRoute = () => {
    const { data: activityData } = useSelector(state => state.activities)
    console.log('activity route')
    return (
        <>
            <Route exact path="/app/admin/lessons" >
                <Redirect to={`/app/admin/lessons/${activityData[0].title}`} />
            </Route>
            <Route path="/app/admin/lessons/:activityId">
                <Activity />
            </Route>
        </>
    )
}


// Lesson component to assign which lesson will be displayed
const Activity = () => {
    const { activityId } = useParams()        // get the lesson id from the path
    console.log('activity id', activityId)

    return (
        <div className="activities-cont">
            {
                activityId === 'Introduction' ? <Introduction /> :
                activityId === 'Planting' ? <Planting />
                : <></>
            }
        </div>
    )
}

export default ActivitiesRoute