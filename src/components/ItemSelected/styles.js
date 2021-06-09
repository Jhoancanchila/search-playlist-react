import styled from 'styled-components'

export const ItemSelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;

    div{
      text-align:left;
      a{
        color:#fafafa;
        text-decoration:none
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`