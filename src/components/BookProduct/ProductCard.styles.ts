import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  color: black;
  max-width: 300px;
  width: 100%;
  height: 350px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid gray;
  background-color: white;
`

export const Thumbnail = styled.img`
  object-fit: fill;
  margin: 0 auto;
  border-radius: 5px;
  width: 15rem;
  height: 15rem;
`

export const Details = styled.div`
  p {
    display: flex;
    left: 2px;
    top: 10px;
  }

  h3 {
    text-align: left;
    font-weight: lighter;
  }

  .previuPrice {
    color: #333333;
    position: relative;
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: x-small;
    text-decoration: line-through;
  }
`

export const PromotionalContainer = styled.div`
  display: flex;

  .pPorcentage {
    position: relative;
    top: 2px;
    left: 5px;
    color: #05a853;
    font-size: x-small;
  }
`

export const PromotionContainer = styled.div`
  position: absolute;
  display: flex;
  border: 2px solid black;
  color: white;
  background-color: green;
  padding: 5px;
  border-radius: 10px;
  transform: rotate(-15deg);
`
