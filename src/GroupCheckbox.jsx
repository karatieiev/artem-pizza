import React from "react"
import PropTypes from "prop-types"

const GroupCheckbox = ({ menu, option, caption, onChange }) => {
  const [selection, setSelection] = React.useState([])

  const handleOnChange = (id) => {
    setSelection((selectionCopy) => {
      const index = selectionCopy.findIndex((item) => item.id === id)
      if (index === -1) {
        selectionCopy.push(menu.find((item) => item.id === id))
      } else {
        selectionCopy.splice(index, 1)
      }
      return selectionCopy
    })
    onChange(option, selection)
  }

  return (
    <>
      <div>{caption}</div>
      {menu.map((item) => (
        <>
          <input
            type="checkbox"
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

GroupCheckbox.propTypes = {
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

export default GroupCheckbox
