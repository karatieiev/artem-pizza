import React from "react"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { Configurator } from "./Configurator"
import { store } from "../store/store"
import { getIngredients } from "../api/ingredients"

jest.mock("../api/ingredients", () => ({
  getIngredients: jest.fn(),
}))

const getControlledPromise = () => {
  let resolve
  let reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return { resolve, reject, promise }
}

describe("Configurator", () => {
  it("renders loading message", () => {
    const { promise } = getControlledPromise()
    getIngredients.mockImplementation(() => promise)
    const { getByText } = render(
      <Provider store={store}>
        <Configurator />
      </Provider>
    )
    expect(getByText("Loading...")).toBeInTheDocument()
  })
  it("renders correctly", async () => {
    const { promise, resolve } = getControlledPromise()
    getIngredients.mockImplementation(() => promise)
    resolve([
      {
        id: "0",
        slug: "size",
        name: "30см",
        category: "size",
        price: "200",
      },
    ])
    const { getByText } = render(
      <Provider store={store}>
        <Configurator />
      </Provider>
    )
    await waitFor(() => {
      expect(getByText("Размер")).toBeInTheDocument()
    })
  })
  it("renders error message", async () => {
    const { promise, reject } = getControlledPromise()
    getIngredients.mockImplementation(() => promise)
    reject({ message: "error" })
    const { getByText } = render(
      <Provider store={store}>
        <Configurator />
      </Provider>
    )
    await waitFor(() => {
      expect(getByText("Something went wrong... error")).toBeInTheDocument()
    })
  })
  it("shows correct price", async () => {
    const { promise, resolve } = getControlledPromise()
    getIngredients.mockImplementation(() => promise)
    resolve([
      {
        id: "0",
        slug: "ham",
        name: "ветчина",
        category: "meat",
        price: "11",
      },
      {
        id: "1",
        slug: "bacon",
        name: "бекон",
        category: "meat",
        price: "11",
      },
    ])
    const { getByText } = render(
      <Provider store={store}>
        <Configurator />
      </Provider>
    )
    await waitFor(() => {
      expect(getByText("Мясо")).toBeInTheDocument()
    })

    const bacon = getByText("бекон")
    fireEvent.click(bacon)
    const ham = getByText("ветчина")
    fireEvent.click(ham)

    expect(getByText("Заказать за 22р")).toBeInTheDocument()
  })
})
