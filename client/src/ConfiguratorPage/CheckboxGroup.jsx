/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import styles from "./CheckboxGroup.module.scss"
import { orderData } from "../store/order/selectors"
import { setOrder } from "../store/order/actions"

export const CheckboxGroup = ({ ingredients, category, caption }) => {
  const order = useSelector(orderData)
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(setOrder(category, id))
  }
  return (
    <div className={styles.mainContainer}>
      <p>{caption}</p>
      <div className={styles.row}>
        {ingredients.map((item) => {
          const selected = order.some((i) => i.id === item.id)
          return (
            <div
              className={
                selected
                  ? `${styles.ingredientContainer} ${styles.ingredientContainerChecked}`
                  : styles.ingredientContainer
              }
              key={`${item.id}+`}
              role="presentation"
              onClick={() => handleClick(item.id)}
            >
              <img
                src={`${process.env.REACT_APP_API_SERVER}/${item.thumbnail}`}
                alt=""
              />
              <div className={styles.title}>{item.name}</div>
              <div className={styles.price}>
                {`${item.price} ₽`}
                <input
                  className={styles.input}
                  type="checkbox"
                  id={item.id}
                  name={category}
                  checked={selected}
                  onChange={() => null}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

CheckboxGroup.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}
