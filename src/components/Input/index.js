import React from 'react'
import { InputStyled } from './styles'

export const Input = ({ ...props }) => {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  )
}
