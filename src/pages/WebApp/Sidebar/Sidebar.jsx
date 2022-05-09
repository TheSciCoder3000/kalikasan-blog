import { useEffect } from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'

import {
    Dashboard as DashboardSvg,
    School as SchoolSvg,
    Admin as AdminSvg,
    Participant as ParticipantSvg
} from '../iconComp'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

import './Sidebar.css'

const Sidebar = ({ userData, activityData, currentUser }) => {
    const lessonListAnimation = useAnimation()
    const lessonListAdminAnimation = useAnimation()
    const { pathname } = useLocation()

    const lessonVariant = {
        hidden: {
            maxHeight: 0,
            transition: { duration: 0.3 }
        },
        visible: {
            maxHeight: '200px',
            transition: { duration: 0.5 }
        }
    }

    // Run Sub Lesson animation
    useEffect(() => {
        console.log('effect running')
        if (pathname === '/app/lessons') {
            console.log('lesson route')
            lessonListAnimation.start('visible')
        }
        else {
            console.log('diff route')
            lessonListAnimation.start('hidden')
        }
    }, [pathname])

    useEffect(() => {
        console.log('effect running')
        if (pathname === '/app/admin/lessons') {
            console.log('lesson route')
            lessonListAdminAnimation.start('visible')
        }
        else {
            console.log('diff route')
            lessonListAdminAnimation.start('hidden')
        }
    }, [pathname])


    return (
        <div className="side-panel">
                <div className="site-logo">
                    <h2>Kalikasan</h2>
                </div>
                <div className="user-info">
                    <div className="profile-img-cont">

                    </div>
                    <div className="profile-content-cont">
                        <h4 className="user-name">{userData?.FirstName} {userData?.LastName}</h4>
                        <p className="user-email">{currentUser.email || ''}</p>
                    </div>
                </div>
                <div className="app-nav-cont">
                    <h4 className="nav-header">MAIN</h4>
                    <div className="nav-item">
                        <Link exact activeClassName="active-nav" to="/app" className="nav-content">
                            <div className="nav-icon-cont"><DashboardSvg /></div>
                            <div className="nav-text">Dashboard</div>
                            
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link activeClassName="active-nav" to="/app/lessons" className="nav-content">
                            <div className="nav-icon-cont"><SchoolSvg /></div>
                            <div className="nav-text">Lessons</div>
                            
                        </Link>
                        <AnimatePresence>
                            {(pathname === '/app/lessons') && (
                                <motion.ul  className="lesson-list"
                                            animate={lessonListAnimation}
                                            exit='hidden'
                                            variants={lessonVariant}
                                            initial='hidden'>
                                    {activityData.map(activity => (
                                        <li className="lesson-item">{activity.title}</li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                    {/* <div className="nav-item">
                        <Link activeClassName="active-nav" to="/app/calendar" className="nav-content">
                            <div className="nav-icon-cont"><CalendarSvg /></div>
                            <div className="nav-text">Calendar</div>
                            
                        </Link>
                    </div> */}
                </div>
                {userData.admin && (
                    <div className="app-nav-cont">
                        <h4 className="nav-header">ADMIN</h4>
                        <div className="nav-item">
                            <Link exact activeClassName='active-nav' to='/app/admin' className='nav-content'>
                                <div className="nav-icon-cont"><AdminSvg /></div>
                                <div className="nav-text">Admin Dashboard</div>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link activeClassName='active-nav' to='/app/admin/participants' className='nav-content'>
                                <div className="nav-icon-cont"><ParticipantSvg /></div>
                                <div className="nav-text">Participants</div>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link activeClassName="active-nav" to="/app/admin/lessons" className="nav-content">
                                <div className="nav-icon-cont"><SchoolSvg /></div>
                                <div className="nav-text">Activities</div>
                                
                            </Link>
                            <AnimatePresence>
                                {(pathname === '/app/admin/lessons') && (
                                    <motion.ul  className="lesson-list"
                                                animate={lessonListAdminAnimation}
                                                exit='hidden'
                                                variants={lessonVariant}
                                                initial='hidden'>
                                        {activityData.map(activity => (
                                            <li className="lesson-item">{activity.title}</li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default Sidebar