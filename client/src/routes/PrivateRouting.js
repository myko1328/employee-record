import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/userActions'

const PrivateRoute = ({
  isAuthenticated,
  loading,
  loadUser,
  component: Component,
  ...rest
}) => {
  if (localStorage.token) {
    loadUser()
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <h1>SPINNER BLEEH</h1>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  loading: state.users.loading,
})

export default connect(mapStateToProps, { loadUser })(PrivateRoute)
