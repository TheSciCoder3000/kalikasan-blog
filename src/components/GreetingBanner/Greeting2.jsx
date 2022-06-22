import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTask } from '../../redux/userSlice'
import { MeetingSvg } from './svg'
import { useAuth } from '../Auth'
import { Link } from 'react-router-dom'

const Greeting2 = () => {
    const dispatch = useDispatch()
    const { currentUser } = useAuth()

    const taskLoading = useSelector(state => state.user.taskLoading)
    const seminarTaskInstance = useSelector(state => state.user.data.tasks.find(task => task.lessonId === 'Seminar'))

    const joinHandler = () => {
        setTask(dispatch, currentUser.uid, {
            lessonId: 'Seminar',
            value: !seminarTaskInstance?.value
        })
    }


    return (
        <div className='banner banner-2'>
            <div className="banner-text">
                <h1>Let's Save The Earth</h1>
                <p>Meet with us and let's talk about our planet's future</p>
                <p><Link target='_blank' rel="noopener noreferrer" to={{ pathname: 'https://us02web.zoom.us/j/83810191278?pwd=FrmvoKtE1qsK1QEYftc0JRJ3-prL3R.1' }}>https://us02web.zoom.us/j/83810191278?pwd=FrmvoKtE1qsK1QEYftc0JRJ3-prL3R.1</Link></p>
                <p>June 23, 2022 - Thursday</p>
                <p>2:00 PM - 3:00PM</p>
                <button 
                    onClick={joinHandler}
                    disabled={taskLoading}
                    className={`${seminarTaskInstance?.value ? 'seminar-joining' : 'seminar-not-joining'}`}>
                    {seminarTaskInstance?.value ? 'Joining' : 'Not Joining'}
                </button>
            </div>
            <MeetingSvg className='meeting-svg' />
        </div>
    )
}

export default Greeting2