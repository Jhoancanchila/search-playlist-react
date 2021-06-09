const fromApiResponseToPlayList = apiResponse => {
  const { items } = apiResponse
  return { items }
}

export const getPlayList = ({ token }) => {
  const apiURL = `https://api.spotify.com/v1/users/wizzler/playlists`

  return fetch(apiURL, {
    method: 'GET',
    headers: {
      "Authorization": 'Bearer ' + token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(fromApiResponseToPlayList)
}