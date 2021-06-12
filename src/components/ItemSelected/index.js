import React from 'react'
import { ItemSelectedStyled } from './styles'

export const ItemSelected = ({ images = [], name, owner = {}, external_urls = {}, type }) => {
  return (
    <ItemSelectedStyled>
      <img src={images[0].url} alt="imagen play list" />
      <div>
        <h2>{name}</h2>
        <div className="grid">
          <div>
            <p><strong>List Name:</strong> {name}</p>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Url List:</strong> <a href="https://open.spotify.com/playlist/25FdKQ1WIO9FLSycfuSFRT" target="_blank">{external_urls.spotify}</a></p>
            <p><strong>Owner:</strong> {owner.display_name}</p>
            <p><strong>owner's spotify profile:</strong> <a href=" https://open.spotify.com/user/wizzler" target="_blank">{owner.external_urls.spotify}</a></p>
          </div>
        </div>
      </div>
    </ItemSelectedStyled>
  )
}
