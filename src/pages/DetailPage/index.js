import React, { useState, useEffect } from 'react'
import { ItemSelected } from '../../components/ItemSelected'
import { Wrapper } from '../../components/Wrapper'
import { useSelector } from 'react-redux'
import { useToken } from '../../Hooks/useToken'
import { DetailPageStyled } from './styles'

export const DetailPage = ({ match, history }) => {
  const token = useToken()

  let statePlayList = useSelector(state => Object.values(state.playList)[0]?.find(item => item.id === match.params.id))
  const [playlist, setPlaylist] = useState(statePlayList)
  // console.log(playlist)

  useEffect(() => {
    if (!playlist && token) {
      fetch(`https://api.spotify.com/v1/playlists/${match.params.id}`, {
        method: 'GET',
        headers: {
          "Authorization": 'Bearer ' + token,
          "Content-Type": "application/json"
        },
      })
        .then(res => res.json())
        .then(data => {
          setPlaylist(data)
        })
        .catch(() => {
          console.log('error recuperando el id')
        })
    }
  }, [playlist, match.params.id, token])

  function handleClick() {
    history.goBack()
  }

  return (
    <DetailPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        {playlist &&
          <ItemSelected {...playlist} />
        }
      </Wrapper>
    </DetailPageStyled>
  )
}
