import React from "react"
import PropTypes from "prop-types"
import styles from "./OrderPreview.module.scss"

export const OrderPreview = ({ name, description }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div>{description}</div>
    </div>
  )
}

OrderPreview.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
