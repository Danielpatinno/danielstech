import { styled } from 'styled-components'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  margin: auto;
  margin-top: 30px;
  max-width: 50rem;
  list-style: none;

  @media (max-width: 768px) {
    gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    ul {
      margin: auto;
      width: 300px;
    }
  }
`
