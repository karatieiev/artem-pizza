import React from "react"
import PropTypes from "prop-types"

const GroupCheckbox = ({ menu, option, caption, onChange }) => {
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
        <>
          <input
            type="checkbox"
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

GroupCheckbox.propTypes = {
  menu: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        checked: PropTypes.bool.isRequired,
      })
    )
  ).isRequired,
  option: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default GroupCheckbox
