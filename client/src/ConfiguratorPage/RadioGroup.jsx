import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styles from "./RadioGroup.module.scss"

export const RadioGroup = ({ ingredients, category, caption, register }) => {
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

RadioGroup.propTypes = {
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
