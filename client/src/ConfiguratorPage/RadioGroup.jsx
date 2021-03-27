import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import styles from "./RadioGroup.module.scss"
import { setOrder } from "../store/order/actions"
import { orderData } from "../store/order/selectors"

export const RadioGroup = ({ ingredients, category, caption }) => {
  const order = useSelector(orderData)
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(setOrder(category, id))
  }

  return (
    <div className={styles.className}>
      <p>{caption}</p>
      <div>
        {ingredients.map((item) => (
          <Fragment key={item.id}>
            <input
              type="radio"
              id={item.id}
              name={category}
              checked={order.some((i) => item.id === i.id)}
              onChange={() => handleClick(item.id)}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

RadioGroup.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}
