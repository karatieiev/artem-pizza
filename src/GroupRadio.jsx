import React from "react"
import PropTypes from "prop-types"

const GroupRadio = ({ menu, option, caption, onChange }) => {
  const handleOnChange = (id) => {
    onChange(
      option,
      menu.filter((item) => item.id === id)
    )
  }

  return (
    <>
      <div>{caption}</div>
      {menu.map((item) => (
        <>
          <input
            type="radio"
            id={item.id}
            name={option}
            onChange={() => handleOnChange(item.id)}
          />
          <label htmlFor={item.id}>{item.name}</label>
        </>
      ))}
    </>
  )
}

GroupRadio.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      option: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  option: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default GroupRadio
