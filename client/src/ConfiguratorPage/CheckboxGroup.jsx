import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styles from "./Groups.module.scss"

export const CheckboxGroup = ({ ingredients, category, caption, register }) => {
  return (
    <div className={styles.className}>
      <p>{caption}</p>
      <div>
        {ingredients.map((item) => (
          <Fragment key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              name={category}
              ref={register}
              value={item.id}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </Fragment>
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
}
