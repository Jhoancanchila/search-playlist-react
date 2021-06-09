import { CLIENT_ID, CLIENT_SECRET } from './settings'

export const getToken = () => {
  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    },
    body: 'grant_type=client_credentials'
  })
    .then(res => res.json())
    .then(data => {
      const { access_token } = data
      return access_token
    })
    .catch(error => error)
}
