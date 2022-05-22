import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth } from '../../components/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, fetchActivities, fetchTasks } from '../../redux'
import useWindowDim from '../../components/useWindowDim'

import ProtectedAdminRoute from '../../components/ProtectedAdminRoute'
import Dashboard from './Dashboard/Dashboard'
import Sidebar from './Sidebar/Sidebar'
import AdminDash from './Admin/Dashboard/AdminDash'
import LessonRoute from './Lesson/LessonRoute'
import Settings from './Settings/Settings'
import ParticipantRoute from './Admin/Participant/ParticipantRoute'
import TopBar from './TopBar/TopBar'
import './WebApp.css'


// Main web app the users will use to conduct attend activities
const WebApp = () => {
    const width = useWindowDim()
    const [menubar, setMenubar] = useState(false)
    const dispatch = useDispatch()                  // used to dispatch redux state actions
    const { currentUser, pending } = useAuth()      // used for getting currentUser instance and if fetch request is pending

    // Get user data and if fetch request is loading
    const { data: userData, loading: userLoading, profileLoading} = useSelector(state => state.user)
    // Get lesson data and if fetch request is pending
    const { data: activityData, loading: activityLoading } = useSelector(state => state.activities)

    // Update the document title
    useEffect(() => { document.title = 'Kalikasan - App' }, [])

    // Fetch Request
    useEffect(() => {
        if (!pending) dispatch(fetchUser(currentUser.uid))
        dispatch(fetchActivities())
        dispatch(fetchTasks())
        
    }, [pending])

    return ( pending || userLoading || activityLoading ? 
        <div className='data-loading'>Authenticating User</div>
        : !userData ?
        <div className="no-connection">No Connection</div>
        :
        <div className='web-app'>
            {(width > 650 || menubar) && (
                <Sidebar userData={userData} 
                        activityData={activityData}
                        currentUser={currentUser}
                        toggleMenubar={setMenubar}
                        width={width} />
            )}
            {width <= 650 && (
                <TopBar 
                    name={`${userData.FirstName} ${userData.LastName}`} 
                    email={currentUser.email} 
                    toggleMenuBar={setMenubar} />
            )}

            <div className="app-viewer">
                <Switch>
                    {/* Regular Participant Routes */}
                    <Route exact path='/app'>
                        <Dashboard />
                    </Route>
                    <Route path='/app/lessons'>
                        <LessonRoute />
                    </Route>
                    <Route exact path='/app/settings'>
                        <Settings userId={currentUser?.uid} userData={userData} profileLoading={profileLoading} />
                    </Route>

                    {/* Protected Routes */}
                    <ProtectedAdminRoute isAdmin={userData.admin} exact path='/app/admin'>
                        <AdminDash />
                    </ProtectedAdminRoute>
                    <ProtectedAdminRoute isAdmin={userData.admin} path='/app/admin/participants'>
                        <ParticipantRoute />
                    </ProtectedAdminRoute>
                    <ProtectedAdminRoute isAdmin={userData.admin} exact path='/app/admin/lessons'>
                        Activities
                    </ProtectedAdminRoute>
                </Switch>
            </div>
        </div>
    )
}

export default WebApp