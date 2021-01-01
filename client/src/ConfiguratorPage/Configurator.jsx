import React, { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { RadioGroup } from "./RadioGroup"
import { CheckboxGroup } from "./CheckboxGroup"
import { getIngredientsFromServer } from "../store/ingredients/actions"
import {
  ingredientsPending,
  ingredientsData,
  ingredientsError,
  ingredientsCategorySize,
  ingredientsCategoryDough,
  ingredientsCategorySauce,
  ingredientsCategoryCheese,
  ingredientsCategoryVeggies,
  ingredientsCategoryMeat,
} from "../store/ingredients/selectors"
import { buildOrder, orderNotPosted } from "../store/order/actions"
import { calculatePrice } from "../store/price/calculatePrice"
import styles from "./Configurator.module.scss"

const useShallowEqualSelector = (selector) =>
  useSelector(selector, shallowEqual)

export const Configurator = () => {
  const history = useHistory()
  const { register, watch, handleSubmit, setValue } = useForm()

  const pending = useShallowEqualSelector(ingredientsPending)
  const ingredients = useShallowEqualSelector(ingredientsData)
  const error = useShallowEqualSelector(ingredientsError)

  const size = useShallowEqualSelector(ingredientsCategorySize)
  const dough = useShallowEqualSelector(ingredientsCategoryDough)
  const sauce = useShallowEqualSelector(ingredientsCategorySauce)
  const cheese = useShallowEqualSelector(ingredientsCategoryCheese)
  const veggies = useShallowEqualSelector(ingredientsCategoryVeggies)
  const meat = useShallowEqualSelector(ingredientsCategoryMeat)

  const dispatch = useDispatch()

  const selection = watch()

  const refRenderCount = useRef(0)
  refRenderCount.current += 1

  const price = calculatePrice(ingredients, selection)

  dispatch(buildOrder(ingredients, selection))

  useEffect(() => {
    if (!ingredients.length) {
      dispatch(getIngredientsFromServer())
    }
  }, [])

  useEffect(() => {
    setValue("size", size[0]?.id)
    setValue("dough", dough[0]?.id)
    setValue("sauce", sauce[0]?.id)
  }, [ingredients])

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
      <div>Renders count: {refRenderCount.current}</div>
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
        <span className={styles.button}>
          <button type="submit">{`Заказать за ${price}р`}</button>
        </span>
      </form>
    </>
  )
}
