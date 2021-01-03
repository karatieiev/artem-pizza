import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export const OrderDescription = ({ name, description, className }) => {
  return (
    <div className={className}>
      <p>{name}</p>
      <div>{description}</div>
    </div>
  )
}

export const StyledOrderDescription = styled(OrderDescription)`
  font-family: Ronded Mplus 1c;
  font-style: normal;
  font-size: 4vw;

  p {
    color: black;
    margin: 0px 5% 0px 5%;
    font-weight: 500;
    font-size: 1.5em;
  }

  div {
    color: #4b4b7c;
    margin: 0.7em 5% 0px 5%;
    font-weight: normal;
    font-size: 0.8em;
    height: 3em;
  }
`

OrderDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}
