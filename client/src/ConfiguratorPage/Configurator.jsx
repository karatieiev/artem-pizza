import React, { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
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
import { orderNotPosted, setOrder } from "../store/order/actions"
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

export const Configurator = () => {
  const history = useHistory()

  const pending = useSelector(ingredientsPending)
  const ingredients = useSelector(ingredientsData)
  const error = useSelector(ingredientsError)

  const size = useSelector(ingredientsCategorySize)
  const dough = useSelector(ingredientsCategoryDough)
  const sauce = useSelector(ingredientsCategorySauce)
  const cheese = useSelector(ingredientsCategoryCheese)
  const veggies = useSelector(ingredientsCategoryVeggies)
  const meat = useSelector(ingredientsCategoryMeat)

  const name = useSelector(orderName)
  const description = useSelector(orderDescription)
  const price = useSelector(orderPrice)

  const dispatch = useDispatch()

  const refRenderCount = useRef(0)
  refRenderCount.current += 1
  console.log(refRenderCount.current)

  useEffect(() => {
    if (!ingredients.length) {
      dispatch(getIngredientsFromServer())
    }
  }, [])

  useEffect(() => {
    if (!ingredients.length) return
    dispatch(setOrder("dough", dough[0].id))
    dispatch(setOrder("size", size[0].id))
    dispatch(setOrder("sauce", sauce[0].id))
  }, [ingredients])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(orderNotPosted())
    history.push("/checkout")
  }

  const goToOrderList = () => {
    history.push("/order-list")
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
        <img src={userLogo} alt="" onClick={goToOrderList} aria-hidden="true" />
      </div>
      <PizzaImage />
      <div className={styles.orderDescription}>
        <p>{name}</p>
        <div>{description}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.sizeAndDough}>
          <RadioGroup caption="Размер" ingredients={size} category="size" />
          <RadioGroup caption="Тесто" ingredients={dough} category="dough" />
        </div>
        <div className={styles.column}>
          <RadioGroup caption="Соус" ingredients={sauce} category="sauce" />
          <CheckboxGroup caption="Сыр" ingredients={cheese} category="cheese" />
          <CheckboxGroup
            caption="Овощи"
            ingredients={veggies}
            category="vegetables"
          />
          <CheckboxGroup caption="Мясо" ingredients={meat} category="meat" />
        </div>
        <div className={styles.bottomSpace} />
        <div className={styles.button}>
          <button type="submit">{`Заказать за ${price} руб`}</button>
        </div>
      </form>
    </>
  )
}
