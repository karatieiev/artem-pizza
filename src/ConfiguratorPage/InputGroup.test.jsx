import React from "react"
import { render } from "@testing-library/react"
import { InputGroup } from "./InputGroup"

describe("InputGroup", () => {
  it("renders correctly", () => {
    const menu = [
      {
        id: 0,
        option: "option",
        name: "name",
        price: 100,
      },
    ]
    const { getByText } = render(
      <InputGroup
        type="checkbox"
        caption="caption"
        option="option"
        menu={menu}
        register={() => null}
      />
    )
    expect(getByText("caption")).toBeInTheDocument()
    expect(getByText("name")).toBeInTheDocument()
  })
})
