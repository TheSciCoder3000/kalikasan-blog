import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Route, Redirect } from 'react-router-dom'
import IntroductionPage from './LessonPages/Introduction/IntroductionPage'
import PlantTrees from './LessonPages/PlantTrees/PlantTrees'

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

const Lesson = () => {
    const { lessonId } = useParams()
    console.log('lesson id', lessonId)

    return (
        <div className="lesson-cont">
            {
                lessonId === 'Introduction' ? <IntroductionPage lessonId={lessonId} /> :
                lessonId === 'PlantTrees' ? <PlantTrees />
                : <></>
            }
        </div>
    )
}

export default LessonRoute