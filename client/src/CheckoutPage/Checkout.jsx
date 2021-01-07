import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  orderDescription,
  orderError,
  orderName,
  orderPending,
  orderPosted,
  orderPrice,
} from "../store/order/selectors"
import { postOrderToServer } from "../store/order/actions"
import styles from "./Checkout.module.scss"
import backward from "../assets/backward.png"

export const Checkout = () => {
  const history = useHistory()
  const price = useSelector(orderPrice)
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      card: "",
    },
  })
  const dispatch = useDispatch()
  const orderPostedToServer = useSelector(orderPosted)
  const error = useSelector(orderError)
  const pending = useSelector(orderPending)
  const pizzaName = useSelector(orderName)
  const pizzaDescription = useSelector(orderDescription)
  const pizzaPrice = useSelector(orderPrice)

  const sel = watch()
  const dataFilled =
    sel.address &&
    sel.entrance &&
    sel.floor &&
    sel.flat &&
    sel.cardNumber &&
    sel.cardDate &&
    sel.cardCVV
  const btnClass = dataFilled ? styles.buttonEnable : styles.buttonDisable

  const onSubmit = () => {
    if (!dataFilled) {
      return
    }
    dispatch(
      postOrderToServer({
        ingredients: [
          pizzaName,
          pizzaDescription,
          pizzaPrice + 180,
          new Date(),
        ],
      })
    )
  }

  const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/\d{1,4}/g)
        ?.join(" ")
        .substring(0, 19) || ""
    )
  }

  const handleChange = (event) => {
    const evnt = event
    const { value } = event.target
    evnt.target.value = normalizeCardNumber(value)
  }

  if (orderPostedToServer) {
    history.push("/order")
  }

  if (pending) {
    return <div>Posting...</div>
  }

  if (error) {
    return <div>Something went wrong... {error}</div>
  }

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <img src={backward} alt="" />
        <span>Оформление заказа</span>
      </div>
      <div className={styles.orderDescription}>
        <div>{pizzaName}</div>
        <div>{pizzaDescription}</div>
        <div />
        <div>{`${pizzaPrice} руб`}</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.address}>
          <label htmlFor="address">Адрес доставки</label>
          <input
            id="address"
            type="text"
            name="address"
            ref={register}
            placeholder="Введите адрес"
          />
        </div>
        <div className={styles.addressDetails}>
          <div>
            <label>подъезд</label>
            <input type="text" id="entrance" name="entrance" ref={register} />
          </div>
          <div>
            <label>этаж</label>
            <input type="text" id="floor" name="floor" ref={register} />
          </div>
          <div>
            <label>квартира</label>
            <input type="text" id="flat" name="flat" ref={register} />
          </div>
        </div>
        <div className={styles.cardNumber}>
          <label htmlFor="cardNumber">Данные для оплаты</label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            ref={register}
            placeholder="Номер карты"
            onChange={handleChange}
          />
        </div>
        <div className={styles.cardData}>
          <input
            type="text"
            id="cardDate"
            name="cardDate"
            ref={register}
            placeholder="Дата"
          />
          <input
            type="text"
            id="cardCVV"
            name="cardCVV"
            ref={register}
            placeholder="CVV"
          />
        </div>
        <div className={styles.bottomSpace} />
        <div className={styles.footer}>
          <div>
            <span>Стоимость заказа</span>
            <span>{`${price} руб`}</span>
          </div>
          <div>
            <span>Стоимость доставки</span>
            <span>180 руб</span>
          </div>
          <div />
          <div>
            <span>К оплате</span>
            <span>{`${price + 180} руб`}</span>
          </div>
          <button className={btnClass} type="submit">{`Оплатить ${
            price + 180
          } руб`}</button>
        </div>
      </form>
    </div>
  )
}
