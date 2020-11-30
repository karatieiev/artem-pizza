import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export const Registration = ({ formSubmit }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    if (formSubmit) {
      formSubmit(data)
    }
  }

  return (
    <>
      <h3>Регистрация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="login">
          Логин
          <input id="login" type="text" name="login" ref={register} />
        </label>
        <br />
        <label htmlFor="password">
          Пароль
          <input id="password" type="text" name="password" ref={register} />
        </label>
        <br />
        <br />
        <button data-testid="btnSubmit" type="submit">
          Регистрация
        </button>
      </form>
      <br />
      <Link to="/login">Аутентификация</Link>
    </>
  )
}

Registration.propTypes = {
  formSubmit: PropTypes.func,
}

Registration.defaultProps = {
  formSubmit: null,
}
