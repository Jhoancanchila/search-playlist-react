import styled from 'styled-components'

export const InputStyled = styled.label`
  display: inline-flex;
  background: white;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
  padding: 0 2rem;
  border-radius: 5px;
  flex: 1;
  i {
    margin-right: 1em;
    color: #C4C4C4;
  }
  input {
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .7em;
    outline: 0;
    color: #111517;
    background: white;
    &::-webkit-input-placeholder {
      color: #C4C4C4;
    }
  }
  
`