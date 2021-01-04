import React from "react"
import { Route, Switch } from "react-router-dom"
import { Configurator } from "./ConfiguratorPage"
import { Login } from "./LoginPage"
import { Registration } from "./RegistrationPage"
import { PrivateRoute } from "./sharedComponents/PrivateRoute"
import { PageNotFound } from "./sharedComponents/PageNotFound"
import { Checkout } from "./CheckoutPage"
import { Order } from "./OrderPage"
import { OrderList } from "./OrdersListPage"
// import { Home } from "./HomePage"
// import { Navigation } from "./sharedComponents/Navigation"

export const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" redirect="/login">
          <Configurator />
        </PrivateRoute>
        <PrivateRoute path="/checkout" redirect="/login">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/order" redirect="/login">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/order-list" redirect="/login">
          <OrderList />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App
