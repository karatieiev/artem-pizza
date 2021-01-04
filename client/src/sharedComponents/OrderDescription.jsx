import React from "react"
import PropTypes from "prop-types"
import styles from "./OrderDescription.module.scss"

export const OrderDescription = ({ name, description }) => {
  return (
    <div className={styles.orderDescription}>
      <p>{name}</p>
      <div>{description}</div>
    </div>
  )
}

OrderDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
