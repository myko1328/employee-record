import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EmployeeDashboard from '../pages/EmployeeDashboard'
import Home from '../pages/Home'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/employee-dashboard"
            component={EmployeeDashboard}
          />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
