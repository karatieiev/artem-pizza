import React from "react"
import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/" style={{ marginLeft: 20 }}>
          Главная
        </Link>
        <Link to="/configurator" style={{ marginLeft: 20 }}>
          Заказать пиццу
        </Link>
        <Link to="/order-list" style={{ marginLeft: 20 }}>
          История заказов
        </Link>
      </nav>
    </>
  )
}
