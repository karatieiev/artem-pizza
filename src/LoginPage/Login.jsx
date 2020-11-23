import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuthContext } from "../sharedComponents/AuthContext"

export const Login = () => {
  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")
  const { logIn } = useAuthContext()
  const history = useHistory()

  const handleLoginChange = (event) => {
    setLogin(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    logIn()
    history.push("/")
  }

  return (
    <>
      <h3>Аутентификация</h3>
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
        <button type="submit">Вход</button>
      </form>
      <br />
      <Link to="/registration">Регистрация</Link>
    </>
  )
}
