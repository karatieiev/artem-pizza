import React from "react"
import PropTypes from "prop-types"

export const InputGroup = ({ menu, option, caption, register, type }) => {
  return (
    <>
      <div>{caption}</div>
      {menu.map((item) => (
        <label htmlFor={item.id} key={item.id}>
          <input
            type={type}
            id={item.id}
            name={option}
            ref={register}
            value={item.id}
          />
          {item.name}
        </label>
      ))}
    </>
  )
}

InputGroup.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  option: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}
