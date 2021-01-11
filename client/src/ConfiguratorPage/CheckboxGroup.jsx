/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from "react"
import PropTypes from "prop-types"
import { shallowEqual, useSelector } from "react-redux"
import styles from "./CheckboxGroup.module.scss"
import { orderData } from "../store/order/selectors"

const useShallowEqualSelector = (selector) =>
  useSelector(selector, shallowEqual)

export const CheckboxGroup = ({
  ingredients,
  category,
  caption,
  register,
  setValue,
}) => {
  const order = useShallowEqualSelector(orderData)
  const handleClick = (id) => {
    if (order.some((i) => i.id === id)) {
      setValue(
        category,
        order.map((item) =>
          item.category === category && item.id !== id ? item.id : null
        )
      )
    } else {
      setValue(category, [
        ...order.map((item) => (item.category === category ? item.id : null)),
        id,
      ])
    }
  }
  return (
    <div className={styles.mainContainer}>
      <p>{caption}</p>
      <div className={styles.row}>
        {ingredients.map((item) => (
          <div
            className={
              order.some((i) => i.id === item.id)
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
                ref={register}
                value={item.id}
              />
            </div>
          </div>
        ))}
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
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
}
