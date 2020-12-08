export const getOrders = () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`).then((result) =>
    result.json()
  )
}

export const postOrder = (data) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((result) => result.json())
}
