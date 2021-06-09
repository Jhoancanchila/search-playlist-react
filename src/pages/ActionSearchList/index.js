import React from 'react'
import { Wrapper } from '../../components/Wrapper'
import { Search } from '../../components/Search'
import { ActionSearchListStyled } from './styles'

export const ActionSearchList = () => {
  return (
    <ActionSearchListStyled>
      <Wrapper>
        <div className='actionSearch'>
          <h1>Spotify</h1>
          <Search />
        </div>
      </Wrapper>
    </ActionSearchListStyled>
  )
}
