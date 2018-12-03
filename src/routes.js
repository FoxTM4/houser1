import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Wizard1 from './components/Wizard1'
import Wizard2 from './components/Wizard2'
import Wizard3 from './components/Wizard3'
import Wizard4 from './components/Wizard4'
import Wizard5 from './components/Wizard5'

export default(
    <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Dashboard} path='/dashboard'/>
        <Route component={Wizard1} path='/wizard/1'/>
        <Route component={Wizard2} path='/wizard/2'/>
        <Route component={Wizard3} path='/wizard/3'/>
        <Route component={Wizard4} path='/wizard/4'/>
        <Route component={Wizard5} path='/wizard/5'/>
    </Switch>
)