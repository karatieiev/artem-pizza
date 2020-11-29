import React from "react"
import PropTypes from "prop-types"

export const PizzaContext = React.createContext({})

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = React.useState([])

  return (
    <PizzaContext.Provider value={{ pizza, setPizza }}>
      {children}
    </PizzaContext.Provider>
  )
}

export const usePizzaContext = () => React.useContext(PizzaContext)

PizzaProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
