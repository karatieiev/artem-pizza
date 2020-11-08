import React from "react"
import PropTypes from "prop-types"

const GroupCheckbox = ({ menu, option, caption, onChange }) => {
  const [selection, setSelection] = React.useState(menu)

  const handleOnChange = (id) => {
    setSelection((selectionCopy) => {
      selectionCopy.map((current) => {
        const item = current
        item.checked = item.id === id ? !item.checked : item.checked
        return item
      })
      return selectionCopy
    })

    onChange(
      option,
      selection.filter((item) => item.checked)
    )
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
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  option: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default GroupCheckbox
