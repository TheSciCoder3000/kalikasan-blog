import React from 'react'
import { Route, Switch } from 'react-router-dom'

const WebApp = () => {
  return (
    <div className='web-app'>
        <div className="side-panel">

        </div>
        <Switch>
            <Route exact path='/app'>
                Dashboard
            </Route>
            <Route exact path='/app/lessons'>
                Lessons
            </Route>
            <Route exact path='/app/settings'>
                Settings
            </Route>
        </Switch>
    </div>
  )
}

export default WebApp