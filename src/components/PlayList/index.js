import React from 'react'
import { ListStyled } from './styles'
import { useHistory } from 'react-router-dom'
import slugify from 'slugify'

export const PlayList = ({ name, id }) => {

  const history = useHistory()
  function handleClick() {
    history.push(`/playlist/${slugify(id)}`)
  }
  return (
    <ListStyled onClick={handleClick}>
      {name}
    </ListStyled>
  )
}
