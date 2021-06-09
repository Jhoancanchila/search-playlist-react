import React from 'react'
import { WrapperStyled } from './styles'

export function Wrapper({ children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}
