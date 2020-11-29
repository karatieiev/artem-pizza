import React from "react"
import PropTypes from "prop-types"

export const CheckboxGroup = ({ menu, option, caption, onChange }) => {
  const handleChange = (id) => {
    onChange(
      option,
      menu.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  return (
    <>
      <div>{caption}</div>
      {menu.map((item) => (
        <label htmlFor={item.id} key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            name={option}
            checked={item.checked}
            onChange={() => handleChange(item.id)}
          />
          {item.name}
        </label>
      ))}
    </>
  )
}

CheckboxGroup.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  option: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
