import React from "react"
import GroupRadio from "./GroupRadio"
import GroupCheckbox from "./GroupCheckbox"
import OrderInfo from "./OrderInfo"

const Configurator = () => {
  const [order, setOrder] = React.useState([])

  const [showOrderInfo, setShowOrderInfo] = React.useState(false)

  const menu = [
    { id: 0, option: "size", name: "30см", price: 200, checked: false },
    { id: 1, option: "size", name: "35см", price: 250, checked: false },
    { id: 2, option: "dough", name: "пышное", price: 0, checked: false },
    { id: 3, option: "dough", name: "тонкое", price: 0, checked: false },
    { id: 4, option: "sauce", name: "томатный", price: 0, checked: false },
    { id: 5, option: "sauce", name: "белый", price: 0, checked: false },
    { id: 6, option: "sauce", name: "острый", price: 0, checked: false },
    { id: 7, option: "cheese", name: "моцарелла", price: 29, checked: false },
    { id: 8, option: "cheese", name: "чеддер", price: 29, checked: false },
    { id: 9, option: "cheese", name: "дор блю", price: 29, checked: false },
    { id: 10, option: "vegies", name: "помидоры", price: 29, checked: false },
    { id: 11, option: "vegies", name: "грибы", price: 29, checked: false },
    { id: 12, option: "vegies", name: "перец", price: 29, checked: false },
    { id: 13, option: "meat", name: "бекон", price: 29, checked: false },
    { id: 14, option: "meat", name: "пепперони", price: 29, checked: false },
    { id: 15, option: "meat", name: "ветчина", price: 29, checked: false },
  ]

  const menuSize = menu.filter((item) => item.option === "size")
  const menuDough = menu.filter((item) => item.option === "dough")
  const menuSauce = menu.filter((item) => item.option === "sauce")
  const menuCheese = menu.filter((item) => item.option === "cheese")
  const menuVegies = menu.filter((item) => item.option === "vegies")
  const menuMeat = menu.filter((item) => item.option === "meat")

  const handleOnGroupChange = (option, selection) => {
    setOrder((orderArg) => {
      const arr = orderArg.filter((item) => item.option !== option)
      selection.map((item) => arr.push(item))
      return arr
    })
  }

  const handleOnButtonClick = () => {
    // console.log(JSON.stringify(order, null, 2))
    setShowOrderInfo((value) => !value)
  }

  React.useEffect(() => {
    setOrder(() => menu.filter((item) => item.checked))
  }, [])

  return (
    <>
      <GroupRadio
        caption="Размер"
        menu={menuSize}
        option="size"
        onChange={handleOnGroupChange}
      />
      <GroupRadio
        caption="Тесто"
        menu={menuDough}
        option="dough"
        onChange={handleOnGroupChange}
      />
      <GroupRadio
        caption="Соус"
        menu={menuSauce}
        option="sauce"
        onChange={handleOnGroupChange}
      />
      <GroupCheckbox
        caption="Сыр"
        menu={menuCheese}
        option="cheese"
        onChange={handleOnGroupChange}
      />
      <GroupCheckbox
        caption="Овощи"
        menu={menuVegies}
        option="vegies"
        onChange={handleOnGroupChange}
      />
      <GroupCheckbox
        caption="Мясо"
        menu={menuMeat}
        option="meat"
        onChange={handleOnGroupChange}
      />
      <br />
      <button type="button" onClick={handleOnButtonClick}>
        {`Заказать ${order.reduce((sum, current) => sum + current.price, 0)}р`}
      </button>
      {showOrderInfo ? <OrderInfo order={order} /> : null}
    </>
  )
}

export default Configurator
