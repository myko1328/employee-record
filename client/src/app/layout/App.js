import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRouting from '../../routes/PrivateRouting'
import EmployeeDashboard from '../pages/EmployeeDashboard'
import Home from '../pages/Home'
import Register from '../pages/Register'
import setAuthToken from '../../utils/utils'
import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRouting
            exact
            path="/employee-dashboard"
            component={EmployeeDashboard}
          />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
