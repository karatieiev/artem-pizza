import React from "react"
import PropTypes from "prop-types"
import calculatePrice, { orderDescription } from "./utils"

const OrderInfo = ({ order }) => {
  return (
    <>
      <div>Описание заказа</div>
      <div>{orderDescription(order)}</div>
      <div>Сумма заказа: {calculatePrice(order)}р</div>
    </>
  )
}

OrderInfo.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      option: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

export default OrderInfo
