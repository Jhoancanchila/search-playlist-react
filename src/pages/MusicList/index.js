import React, { useEffect } from 'react'
import { Wrapper } from '../../components/Wrapper'
import { PlayList } from '../../components/PlayList'
import { useSelector, useDispatch } from 'react-redux'
import { useToken } from '../../Hooks/useToken'
import { getPlayList } from '../../services/getPlayList'
import { MusicListStyled } from './styles'

export const MusicList = () => {

  const token = useToken()
  const dispatch = useDispatch()
  const listContents = useSelector(state => state.listContents)

  useEffect(() => {
    if (token) {
      getPlayList(token)
        .then(items => {
          dispatch({
            type: 'SET_PLAY_LIST',
            payload: items
          })
        })
        .catch(() => {
          console.log('hubo un error con la petición al servidor')
        })
    }
  }, [token, dispatch])

  return (
    <MusicListStyled>
      <Wrapper>
        <ul>
          {
            listContents.map(({ id, name }) => {
              return <PlayList key={id} id={id} name={name} />
            })
          }
        </ul>
      </Wrapper>
    </MusicListStyled>
  )
}
