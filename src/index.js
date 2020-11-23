import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { AuthProvider } from "./sharedComponents/AuthContext"
import { PizzaProvider } from "./sharedComponents/PizzaContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PizzaProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PizzaProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
