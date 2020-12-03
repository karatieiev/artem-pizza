import React from "react"
import { render } from "@testing-library/react"
import { InputGroup } from "./InputGroup"

describe("InputGroup", () => {
  it("renders correctly", () => {
    const ingredients = [
      {
        slug: "0",
        category: "category",
        name: "name",
        price: 100,
      },
    ]
    const { getByText } = render(
      <InputGroup
        type="checkbox"
        caption="caption"
        category="category"
        ingredients={ingredients}
        register={() => null}
      />
    )
    expect(getByText("caption")).toBeInTheDocument()
    expect(getByText("name")).toBeInTheDocument()
  })
})
