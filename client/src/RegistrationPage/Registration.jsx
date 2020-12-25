import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export const Registration = () => {
  const { register } = useForm()

  return (
    <>
      <h3>Регистрация</h3>
      <form>
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
