import React from "react"
import { Redirect, Route } from "react-router-dom"
import PropTypes from "prop-types"
import { useAuthContext } from "./AuthContext"

export const PrivateRoute = ({ children, redirect, path }) => {
  const { auth } = useAuthContext()
  if (auth) return <Route path={path}>{children}</Route>
  return <Redirect to={redirect} />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirect: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
