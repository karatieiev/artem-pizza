import React, { createContext } from "react"
import PropTypes from "prop-types"

export const AuthContext = createContext(false)

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(false)

  const logIn = () => {
    setAuth(true)
  }

  const logOut = () => {
    setAuth(false)
  }

  return (
    <AuthContext.Provider value={{ auth, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => React.useContext(AuthContext)

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
