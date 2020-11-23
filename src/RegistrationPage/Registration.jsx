import React from "react"
import { Link } from "react-router-dom"

export const Registration = () => {
  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleLoginChange = (event) => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h3>Регистрация</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="login">
          Логин
          <input
            id="login"
            type="text"
            value={login}
            onChange={handleLoginChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Пароль
          <input
            id="password"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Регистрация</button>
      </form>
      <br />
      <Link to="/login">Аутентификация</Link>
    </>
  )
}
