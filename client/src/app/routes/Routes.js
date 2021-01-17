import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import PrivateRouting from '../../routes/PrivateRouting'
import EmployeeDashboard from '../pages/EmployeeDashboard'
import Home from '../pages/Home'
import Register from '../pages/Register'
import AddEmployee from '../../components/employees/AddEmployee'
import EmployeeInfo from '../../components/employees/EmployeeInfo'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRouting
          exact
          path="/employee-dashboard"
          component={EmployeeDashboard}
        />
        <Route exact path="/register" component={Register} />\
        <PrivateRouting
          exact
          path="/employee-dashboard/add-employee"
          component={AddEmployee}
        />
        <PrivateRouting exact path="/employees/:id" component={EmployeeInfo} />
      </Switch>
    </div>
  )
}

export default Routes
