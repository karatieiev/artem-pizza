import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { RadioGroup } from "./RadioGroup"
import { CheckboxGroup } from "./CheckboxGroup"
import { getIngredientsFromServer } from "../store/ingredients/actions"
import {
  ingredientsPending,
  ingredientsData,
  ingredientsError,
} from "../store/ingredients/selectors"
import { buildOrder, orderNotPosted } from "../store/order/actions"
import { getPrice } from "../store/price/selectors"

export const Configurator = () => {
  const history = useHistory()
  const { register, watch, handleSubmit } = useForm()
  const pending = useSelector(ingredientsPending)
  const ingredients = useSelector(ingredientsData)
  const error = useSelector(ingredientsError)
  const price = useSelector(getPrice)
  const dispatch = useDispatch()

  const size = ingredients.filter((item) => item.category === "size")
  const dough = ingredients.filter((item) => item.category === "dough")
  const sauce = ingredients.filter((item) => item.category === "sauce")
  const cheese = ingredients.filter((item) => item.category === "cheese")
  const veggies = ingredients.filter((item) => item.category === "veggies")
  const meat = ingredients.filter((item) => item.category === "meat")

  const selection = watch()

  dispatch(buildOrder(ingredients, selection))

  useEffect(() => {
    dispatch(getIngredientsFromServer())
  }, [dispatch])

  const onSubmit = () => {
    dispatch(orderNotPosted())
    history.push("/checkout")
  }

  if (pending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong... {error}</div>
  }

  return (
    <>
      <h3>Соберите пиццу</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup
          caption="Размер"
          ingredients={size}
          category="size"
          register={register}
        />
        <RadioGroup
          caption="Тесто"
          ingredients={dough}
          category="dough"
          register={register}
        />
        <RadioGroup
          caption="Соус"
          ingredients={sauce}
          category="sauce"
          register={register}
        />
        <CheckboxGroup
          caption="Сыр"
          ingredients={cheese}
          category="cheese"
          register={register}
        />
        <CheckboxGroup
          caption="Овощи"
          ingredients={veggies}
          category="veggies"
          register={register}
        />
        <CheckboxGroup
          caption="Мясо"
          ingredients={meat}
          category="meat"
          register={register}
        />
        <br />
        <br />
        <button type="submit">{`Заказать ${price}р`}</button>
      </form>
    </>
  )
}
