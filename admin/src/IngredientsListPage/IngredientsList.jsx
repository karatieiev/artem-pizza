import React from "react"
import { useQuery } from "react-query"
import { useHistory } from "react-router-dom"
import { getIngredientsList } from "../api/ingredients"

export const IngredientsList = () => {
  const history = useHistory()
  const { isLoading, isError, error, data } = useQuery(
    "ingredientsList",
    getIngredientsList
  )

  const handleIngredientClick = (id) => {
    history.push(`/ingredients/${id}`)
  }

  const handleAddNewIngredient = () => {
    history.push("/new-ingredient")
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <h3>Ingredients list</h3>
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              handleIngredientClick(item.id)
            }}
            role="presentation"
          >
            {item.name} ({item.category} - {item.price}р)
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddNewIngredient}>
        Add
      </button>
    </>
  )
}
