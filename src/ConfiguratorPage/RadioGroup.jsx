import React from "react"
import PropTypes from "prop-types"

export const RadioGroup = ({ menu, option, caption, onChange }) => {
  const handleChange = (id) => {
    onChange(
      option,
      menu.map((item) => ({ ...item, checked: item.id === id }))
    )
  }

  return (
    <>
      <div>{caption}</div>
      {menu.map((item) => (
        <>
          <input
            type="radio"
            key={item.id}
            id={item.id}
            name={option}
            checked={item.checked}
            onChange={() => handleChange(item.id)}
          />
          <label htmlFor={item.id}>{item.name}</label>
        </>
      ))}
    </>
  )
}

RadioGroup.propTypes = {
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
