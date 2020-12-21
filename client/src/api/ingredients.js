export const apiGetIngredients = () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/ingredients`).then(
    (result) => {
      if (result.ok) return result.json()
      throw new Error("Error getting ingredients")
    }
  )
}
