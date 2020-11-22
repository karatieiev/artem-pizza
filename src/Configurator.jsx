import React from "react"
import GroupRadio from "./GroupRadio"
import GroupCheckbox from "./GroupCheckbox"
import calculatePrice from "./utils"

const Configurator = () => {
  const [menu, setMenu] = React.useState({
    size: [
      { id: 0, name: "30см", price: 200, checked: true },
      { id: 1, name: "35см", price: 250, checked: false },
    ],
    dough: [
      { id: 2, name: "тонкое", price: 0, checked: true },
      { id: 3, name: "пышное", price: 0, checked: false },
    ],
    sauce: [
      { id: 4, name: "томатный", price: 0, checked: true },
      { id: 5, name: "белый", price: 0, checked: false },
      { id: 6, name: "острый", price: 0, checked: false },
    ],
    cheese: [
      { id: 7, name: "моцарелла", price: 29, checked: false },
      { id: 8, name: "чеддер", price: 29, checked: false },
      { id: 9, name: "дор блю", price: 29, checked: false },
    ],
    vegies: [
      { id: 10, name: "помидоры", price: 29, checked: false },
      { id: 11, name: "грибы", price: 29, checked: false },
      { id: 12, name: "перец", price: 29, checked: false },
    ],
    meat: [
      { id: 13, name: "бекон", price: 29, checked: true },
      { id: 14, name: "пепперони", price: 29, checked: false },
      { id: 15, name: "ветчина", price: 29, checked: false },
    ],
  })

  const handleGroupChange = (option, selection) => {
    setMenu((o) => ({ ...o, [option]: selection }))
  }

  const handleSubmitForm = () => {}

  return (
    <form onSubmit={handleSubmitForm}>
      <GroupRadio
        caption="Размер"
        menu={menu.size}
        option="size"
        onChange={handleGroupChange}
      />
      <GroupRadio
        caption="Тесто"
        menu={menu.dough}
        option="dough"
        onChange={handleGroupChange}
      />
      <GroupRadio
        caption="Соус"
        menu={menu.sauce}
        option="sauce"
        onChange={handleGroupChange}
      />
      <GroupCheckbox
        caption="Сыр"
        menu={menu.cheese}
        option="cheese"
        onChange={handleGroupChange}
      />
      <GroupCheckbox
        caption="Овощи"
        menu={menu.vegies}
        option="vegies"
        onChange={handleGroupChange}
      />
      <GroupCheckbox
        caption="Мясо"
        menu={menu.meat}
        option="meat"
        onChange={handleGroupChange}
      />
      <br />
      <button type="submit">{`Заказать ${calculatePrice(menu)}р`}</button>
    </form>
  )
}

export default Configurator
