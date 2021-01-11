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
import styles from "./Configurator.module.scss"
import {
  orderDescription,
  orderName,
  orderPrice,
} from "../store/order/selectors"
import { PizzaImage } from "./PizzaImage"
import favicon from "../assets/logo.svg"
import artempizzaLogo from "../assets/title.svg"
import userLogo from "../assets/icn_account.svg"

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

  const name = useShallowEqualSelector(orderName)
  const description = useShallowEqualSelector(orderDescription)
  const price = useShallowEqualSelector(orderPrice)

  const dispatch = useDispatch()
  const selection = watch()

  const refRenderCount = useRef(0)
  refRenderCount.current += 1
  console.log(refRenderCount.current)

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
      <div className={styles.header}>
        <img src={favicon} alt="" />
        <img src={artempizzaLogo} alt="" />
        <img src={userLogo} alt="" />
      </div>
      <PizzaImage />
      <div className={styles.orderDescription}>
        <p>{name}</p>
        <div>{description}</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.sizeAndDough}>
          <RadioGroup
            caption="Размер"
            ingredients={size}
            category="size"
            register={register}
            setValue={setValue}
          />
          <RadioGroup
            caption="Тесто"
            ingredients={dough}
            category="dough"
            register={register}
            setValue={setValue}
          />
        </div>
        <div className={styles.column}>
          <RadioGroup
            caption="Соус"
            ingredients={sauce}
            category="sauce"
            register={register}
            setValue={setValue}
          />
          <CheckboxGroup
            caption="Сыр"
            ingredients={cheese}
            category="cheese"
            register={register}
            setValue={setValue}
          />
          <CheckboxGroup
            caption="Овощи"
            ingredients={veggies}
            category="vegetables"
            register={register}
            setValue={setValue}
          />
          <CheckboxGroup
            caption="Мясо"
            ingredients={meat}
            category="meat"
            register={register}
            setValue={setValue}
          />
        </div>
        <div className={styles.bottomSpace} />
        <div className={styles.button}>
          <button type="submit">{`Заказать за ${price} руб`}</button>
        </div>
      </form>
    </>
  )
}
