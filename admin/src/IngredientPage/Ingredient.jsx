import React from "react"
import { useForm } from "react-hook-form"
import { useQuery } from "react-query"
import { useHistory, useParams } from "react-router-dom"
import {
  getIngredient,
  putIngredient,
  deleteIngredient,
} from "../api/ingredients"
import { buildFormData } from "../api/utils"

export const Ingredient = () => {
  const history = useHistory()
  const { id } = useParams()
  const { isLoading, isError, error, data } = useQuery(id, getIngredient)
  const { register, handleSubmit } = useForm()

  const onSubmit = (formData) => {
    putIngredient(id, buildFormData(formData)).then(() => {
      history.push("/")
    })
  }

  const handleCancel = () => {
    history.push("/")
  }

  const handleDelete = () => {
    deleteIngredient(id).then(() => {
      history.push("/")
    })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <h3>Ingredient</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="category">
          Category:{" "}
          <select
            id="category"
            name="category"
            defaultValue={data.category}
            ref={register}
          >
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
          Slug:{" "}
          <input
            type="text"
            id="slug"
            name="slug"
            defaultValue={data.slug}
            ref={register}
          />
        </label>
        <br />
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={data.name}
            ref={register}
          />
        </label>
        <br />
        <label htmlFor="price">
          Price:{" "}
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={data.price}
            ref={register}
          />
        </label>
        <br />
        <label htmlFor="image">
          Image: <input type="file" id="image" name="image" ref={register} />
        </label>
        <br />
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </>
  )
}
