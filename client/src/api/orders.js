export const getOrders = () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`).then((result) =>
    result.json()
  )
}

export const postOrders = (data) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`, {
    method: "POST",
    body: data,
  }).then((result) => result.json())
}
