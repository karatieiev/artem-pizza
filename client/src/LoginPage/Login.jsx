import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logIn } from "../store/auth/actions"
import styles from "./Login.module.scss"
import backward from "../assets/icn_arrow-left.svg"

export const Login = () => {
  const history = useHistory()
  const { register, handleSubmit, watch } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    if (!data.login || !data.password) {
      return
    }
    dispatch(logIn())
    history.push("/")
  }

  const selection = watch()
  const btnClass = `${styles.button} ${
    selection.login && selection.password
      ? styles.buttonEnable
      : styles.buttonDisable
  }`

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <img src={backward} alt="" />
        <span>Авторизация</span>
      </div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="login">Логин</label>
          <input id="login" type="text" name="login" ref={register} />
          <label htmlFor="password">Пароль</label>
          <input id="password" type="text" name="password" ref={register} />
          <button className={btnClass} type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}
