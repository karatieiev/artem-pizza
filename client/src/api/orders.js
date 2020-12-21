export const getOrders = () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`).then((result) => {
    if (result.ok) return result.json()
    throw new Error("Error getting orders list")
  })
}

export const postOrder = (data) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((result) => {
    if (result.ok) return result.json()
    throw new Error("Error posting order")
  })
}
