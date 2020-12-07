import React from "react"
import { Route, Switch } from "react-router-dom"
import { PageNotFound } from "./sharedComponents/PageNotFound"
import { PrivateRoute } from "./sharedComponents/PrivateRoute"
import { Login } from "./LoginPage"
import { IngredientsList } from "./IngredientsListPage"
import { Ingredient } from "./IngredientPage"
import { NewIngredient } from "./NewIngredientPage"

export const App = () => {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" redirect="/login">
          <IngredientsList />
        </PrivateRoute>
        <PrivateRoute path="/ingredients/:id" redirect="/login">
          <Ingredient />
        </PrivateRoute>
        <PrivateRoute path="/new-ingredient" redirect="/login">
          <NewIngredient />
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
