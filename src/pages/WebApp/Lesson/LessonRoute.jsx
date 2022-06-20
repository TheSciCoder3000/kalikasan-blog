import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Route, Redirect } from 'react-router-dom'
import Evaluation from './LessonPages/Evaluation'
import IntroductionPage from './LessonPages/Introduction/IntroductionPage'
import PlantTrees from './LessonPages/PlantTrees/PlantTrees'


// Lesson Route component to differentiate the /lessons and /lessons/{lessonId} routes
const LessonRoute = () => {
    const { data: activityData } = useSelector(state => state.activities)
    return (
        <>
            <Route exact path="/app/lessons" >
                <Redirect to={`/app/lessons/${activityData[0].title}`} />
            </Route>
            <Route path='/app/lessons/:lessonId'>
                <Lesson />
            </Route>
        </>
    )
}


// Lesson component to assign which lesson will be displayed
const Lesson = () => {
    const { lessonId } = useParams()        // get the lesson id from the path

    return (
        <div className="lesson-cont">
            {
                lessonId === 'Introduction' ? <IntroductionPage lessonId={lessonId} /> :
                lessonId === 'Planting' ? <PlantTrees lessonId={lessonId} /> :
                lessonId === 'Evaluation' ? <Evaluation />
                : <></>
            }
        </div>
    )
}

export default LessonRoute