import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth } from '../../components/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, fetchActivities, fetchTasks } from '../../redux'

import ProtectedAdminRoute from '../../components/ProtectedAdminRoute'
import Dashboard from './Dashboard/Dashboard'
import Sidebar from './Sidebar/Sidebar'
import AdminDash from './Admin/Dashboard/AdminDash'
import './WebApp.css'
import Participant from './Admin/Participant/Participant'
import LessonRoute from './Lesson/LessonRoute'
import Settings from './Settings/Settings'


// Main web app the users will use to conduct attend activities
const WebApp = () => {
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
            <Sidebar userData={userData} 
                     activityData={activityData}
                     currentUser={currentUser} />

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
                    <ProtectedAdminRoute isAdmin={userData.admin} exact path='/app/admin/participants'>
                        <Participant />
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