import { useState, useEffect } from 'react'
import { getToken } from '../services/getToken'

export const useToken = () => {

  const [token, setToken] = useState('')
  useEffect(() => {
    getToken()
      .then(res => setToken(res))
  }, [])
  return { token }
}