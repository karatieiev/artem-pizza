import React from "react"
import PropTypes from "prop-types"

export const RadioGroup = ({ ingredients, category, caption, register }) => {
  return (
    <>
      <div>{caption}</div>
      {ingredients.map((item) => (
        <label htmlFor={item.slug} key={item.slug}>
          <input
            type="radio"
            id={item.slug}
            name={category}
            ref={register}
            value={item.slug}
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
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
}
