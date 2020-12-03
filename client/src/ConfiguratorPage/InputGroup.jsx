import React from "react"
import PropTypes from "prop-types"

export const InputGroup = ({
  ingredients,
  category,
  caption,
  register,
  type,
}) => {
  return (
    <>
      <div>{caption}</div>
      {ingredients.map((item) => (
        <label htmlFor={item.slug} key={item.slug}>
          <input
            type={type}
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

InputGroup.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}
