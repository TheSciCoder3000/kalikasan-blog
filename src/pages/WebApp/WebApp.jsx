import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import './WebApp.css'
import { NavLink as Link, useLocation } from 'react-router-dom'

import { DashboardSvg, SchoolSvg, CalendarSvg } from './iconComp'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../components/Auth'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/userSlice'

const WebApp = () => {
    const lessonListAnimation = useAnimation()
    const { pathname } = useLocation()
    const auth = useAuth()
    const dispatch = useDispatch()

    console.log(pathname)
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
        dispatch(fetchUser(auth.uid))
    }, [])

    return (
        <div className='web-app'>
            <div className="side-panel">
                <div className="site-logo">
                    <h2>Kalikasan</h2>
                </div>
                <div className="user-info">
                    <div className="profile-img-cont">

                    </div>
                    <div className="profile-content-cont">
                        <h4 className="user-name">First name Last Name</h4>
                        <p className="user-email">test@mail.com</p>
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
                                    <li className="lesson-item">Lesson 1</li> 
                                    <li className="lesson-item">Lesson 2</li> 
                                    <li className="lesson-item">Lesson 3</li> 
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="nav-item">
                        <Link activeClassName="active-nav" to="/app/calendar" className="nav-content">
                            <div className="nav-icon-cont"><CalendarSvg /></div>
                            <div className="nav-text">Calendar</div>
                            
                        </Link>
                    </div>
                </div>
            </div>
            <div className="app-viewer">
                <Switch>
                    <Route exact path='/app'>
                        <Dashboard />
                    </Route>
                    <Route exact path='/app/lessons'>
                        Lessons
                    </Route>
                    <Route exact path='/app/settings'>
                        Settings
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default WebApp