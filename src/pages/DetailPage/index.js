import React, { useState, useEffect, useMemo } from 'react'
import { ItemSelected } from '../../components/ItemSelected'
import { Wrapper } from '../../components/Wrapper'
import { useSelector } from 'react-redux'
import { DetailPageStyled } from './styles'

export const DetailPage = ({ match, history }) => {

  let statePlayList = useSelector(state => Object.values(state.playList)[0].find(item => item.id === match.params.id))
  const [playlist, setPlaylist] = useState(statePlayList)

  localStorage.setItem('value', JSON.stringify(statePlayList))

  useEffect(() => {

    if (!playlist) {
      let playListLocalStorage = localStorage.getItem('value')
      console.log(playListLocalStorage)
      setPlaylist(playListLocalStorage)
    }
  }, [playlist, match.params.id])

  function handleClick() {
    localStorage.removeItem('value')
    history.goBack()

  }

  return (
    <DetailPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        <ItemSelected {...playlist} />
      </Wrapper>
    </DetailPageStyled>
  )
}
