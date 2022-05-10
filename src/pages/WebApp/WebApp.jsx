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

const WebApp = () => {
    const { currentUser, pending } = useAuth()
    const dispatch = useDispatch()
    const { data: userData, loading: userLoading} = useSelector(state => state.user)
    const { data: activityData, loading: activityLoading } = useSelector(state => state.activities)
    const { loading: taskLoading } = useSelector(state => state.task)

    // Fetch Request
    useEffect(() => {
        if (!pending) dispatch(fetchUser(currentUser.uid))
        dispatch(fetchActivities())
        dispatch(fetchTasks())
        
    }, [pending])

    return ( pending || userLoading || activityLoading || taskLoading ? 
        <>Authenticating User</>
        :
        <div className='web-app'>
            <Sidebar userData={userData} 
                     activityData={activityData}
                     currentUser={currentUser} />

            <div className="app-viewer">
                <Switch>
                    <Route exact path='/app'>
                        <Dashboard />
                    </Route>
                    <Route path='/app/lessons'>
                        <LessonRoute />
                    </Route>
                    <Route exact path='/app/settings'>
                        Settings
                    </Route>
                    <ProtectedAdminRoute isAdmin={userData.admin} exact path='/app/admin'>
                        <AdminDash />
                    </ProtectedAdminRoute>
                    <Route exact path='/app/admin/participants'>
                        <Participant />
                    </Route>
                    <Route exact path='/app/admin/lessons'>
                        Activities
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default WebApp