import React from "react"
import { render } from "@testing-library/react"
import { RadioGroup } from "./RadioGroup"

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
      <RadioGroup
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
