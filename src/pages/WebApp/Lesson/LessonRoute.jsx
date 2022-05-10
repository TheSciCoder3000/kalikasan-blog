import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Route, Redirect } from 'react-router-dom'
import IntroductionPage from './LessonPages/Introduction/IntroductionPage'

const LessonRoute = () => {
    console.log('lesson route')
    const { data: activityData } = useSelector(state => state.activities)
    console.log(activityData)
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

    return (
        <div className="lesson-cont">
            {
                lessonId === 'Introduction' ?
                    <IntroductionPage lessonId={lessonId} />
                    : 
                    <></>
            }
        </div>
    )
}

export default LessonRoute