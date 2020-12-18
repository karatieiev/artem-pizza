import React from "react"
import PropTypes from "prop-types"

export const RadioGroup = ({ ingredients, category, caption, register }) => {
  return (
    <>
      <div>{caption}</div>
      {ingredients.map((item) => (
        <label htmlFor={item.id} key={item.id}>
          <input
            type="radio"
            id={item.id}
            name={category}
            ref={register}
            value={item.id}
          />
          {item.name}
        </label>
      ))}
    </>
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
