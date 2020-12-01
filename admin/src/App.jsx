import React from "react"
import { Route, Switch } from "react-router-dom"
import { PageNotFound } from "./sharedComponents/PageNotFound"
import { PrivateRoute } from "./sharedComponents/PrivateRoute"
import { ProductCreation } from "./ProductCreationPage"
import { Login } from "./LoginPage"

export const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" redirect="/login">
          <ProductCreation />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  )
}
