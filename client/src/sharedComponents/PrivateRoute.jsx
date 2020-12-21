import React from "react"
import { Redirect, Route } from "react-router-dom"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { isAuthenticated } from "../store/auth/selectors"

export const PrivateRoute = ({ children, redirect, path }) => {
  const auth = useSelector(isAuthenticated)
  if (auth) {
    return <Route path={path}>{children}</Route>
  }
  return <Redirect to={redirect} />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirect: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
