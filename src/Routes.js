import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PatientAuth from './components/PatientAuth/Auth'
import DoctorAuth from './components/DoctorAuth/Auth'
import Landing from './views/Landing/Landing'

export default function Routes() {
 return(
  <div>
   <Router>
    <Switch>
    <Route exact path='/' component={Landing} />
     <Route exact path='/patient-login' component={PatientAuth} />
     <Route exact path='/doctor-login' component={DoctorAuth} />
    </Switch>
   </Router>
  </div>
 )
}