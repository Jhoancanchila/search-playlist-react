import React, { useState } from 'react'
import { Input } from '../Input'
import { useDispatch } from 'react-redux'
import { SearchStyled } from './styles'

export const Search = () => {
  const [valueInput, setValueInput] = useState('')
  const dispatch = useDispatch()

  const handleInput = (evt) => {
    setValueInput(evt.target.value)
    dispatch({
      type: 'SEARCH_CONTENT',
      payload: evt.target.value
    })
  }
  const clearInput = () => {
    dispatch({
      type: 'SEARCH_CONTENT',
      payload: ''
    })
    setValueInput('')
  }
  return (
    <SearchStyled>
      {
        valueInput &&
        <i className="fas fa-times close" onClick={clearInput}></i>
      }
      <Input placeholder="Search List..." value={valueInput} onChange={handleInput} />
    </SearchStyled>
  )
}
