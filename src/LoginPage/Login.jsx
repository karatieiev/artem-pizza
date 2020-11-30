import React from "react"
import { useForm } from "react-hook-form"
import { Link, useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import { useAuthContext } from "../sharedComponents/AuthContext"

export const Login = ({ submitForm }) => {
  const { logIn } = useAuthContext()
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    if (submitForm) {
      submitForm(data)
    }
    console.log(data)
    logIn()
    history.push("/")
  }

  return (
    <>
      <h3>Аутентификация</h3>
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
        <button type="submit">Вход</button>
      </form>
      <br />
      <Link to="/registration">Регистрация</Link>
    </>
  )
}

Login.propTypes = {
  submitForm: PropTypes.func,
}

Login.defaultProps = {
  submitForm: null,
}
