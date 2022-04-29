import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import './WebApp.css'

const WebApp = () => {
  return (
    <div className='web-app'>
        <div className="side-panel">

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