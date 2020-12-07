export const getIngredients = () => {
  return fetch(
    `${process.env.REACT_APP_API_SERVER}/ingredients`
  ).then((result) => result.json())
}
