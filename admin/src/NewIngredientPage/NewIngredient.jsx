import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { postIngredient } from "../api/ingredients"
import { buildFormData } from "../api/utils"

export const NewIngredient = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  const onSubmit = (formData) => {
    postIngredient(buildFormData(formData)).then(() => {
      history.push("/")
    })
  }

  const handleCancel = () => {
    history.push("/")
  }

  return (
    <>
      <h3>Ingredient</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="category">
          Category:{" "}
          <select id="category" name="category" ref={register}>
            <option>size</option>
            <option>dough</option>
            <option>sauce</option>
            <option>cheese</option>
            <option>veggies</option>
            <option>meat</option>
          </select>
        </label>
        <br />
        <label htmlFor="slug">
          Slug: <input type="text" id="slug" name="slug" ref={register} />
        </label>
        <br />
        <label htmlFor="name">
          Name: <input type="text" id="name" name="name" ref={register} />
        </label>
        <br />
        <label htmlFor="price">
          Price: <input type="text" id="price" name="price" ref={register} />
        </label>
        <br />
        <label htmlFor="image">
          Image: <input type="file" id="image" name="image" ref={register} />
        </label>
        <br />
        <br />
        <button type="submit">Add</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </>
  )
}
