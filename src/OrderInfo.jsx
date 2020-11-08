import React from "react"
import PropTypes from "prop-types"

const OrderInfo = ({ order }) => {
  return (
    <>
      <div>Описание заказа</div>
      <div>
        Размер:{" "}
        {order
          .filter((item) => item.option === "size")
          .map((item) => (
            <>{item.name}</>
          ))}
      </div>
      <div>
        Тесто:{" "}
        {order
          .filter((item) => item.option === "dough")
          .map((item) => (
            <>{item.name}</>
          ))}
      </div>
      <div>
        Соус:{" "}
        {order
          .filter((item) => item.option === "sauce")
          .map((item) => (
            <>{item.name}</>
          ))}
      </div>
      <div>
        Сыр:{" "}
        {order
          .filter((item) => item.option === "cheese")
          .map((item, index) => (
            <>
              {index === 0 ? null : ", "}
              {item.name}
            </>
          ))}
      </div>
      <div>
        Овощи:{" "}
        {order
          .filter((item) => item.option === "vegies")
          .map((item, index) => (
            <>
              {index === 0 ? null : ", "}
              {item.name}
            </>
          ))}
      </div>
      <div>
        Мясо:{" "}
        {order
          .filter((item) => item.option === "meat")
          .map((item, index) => (
            <>
              {index === 0 ? null : ", "}
              {item.name}
            </>
          ))}
      </div>
      <div>
        Сумма заказа: {order.reduce((sum, current) => sum + current.price, 0)}р
      </div>
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
