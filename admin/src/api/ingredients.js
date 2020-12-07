export const getIngredientsList = () => {
  return fetch(
    `${process.env.REACT_APP_API_SERVER}/ingredients`
  ).then((result) => result.json())
}

export const getIngredient = (id) => {
  return fetch(
    `${process.env.REACT_APP_API_SERVER}/ingredients/${id}`
  ).then((result) => result.json())
}

export const putIngredient = (id, formData) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/ingredients/${id}`, {
    method: "PUT",
    body: formData,
  }).then((result) => result.json())
}

export const postIngredient = (formData) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/ingredients/${id}`, {
    method: "POST",
    body: formData,
  }).then((result) => result.json())
}

export const deleteIngredient = (id) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/ingredients/${id}`, {
    method: "DELETE",
  }).then((result) => result.json())
}
