import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
  }
`

export const ContentContainer = styled.div`
  margin-top: 20px;
  width: 50%;
  padding: 10px;

  p {
    margin-top: 20px;
    font-size: 1rem;
    margin-left: 10px;
  }

  .previouPrice {
    span {
      text-decoration: line-through;
    }
  }

  .promotionalPrice {
    color: #05a853;
    margin-top: 8px;
    margin-left: 20px;
  }

  .pPromotion {
    border: 2px solid black;
    width: 100px;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    color: white;
    background-color: green;
  }

  @media (max-width: 768px) {
    /* text-align: center; */
    margin: auto;
  }
`

export const DescriptionContainer = styled.div`
  h3 {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  li {
    font-weight: normal;
  }
`

export const ButtonsContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
  button {
    margin-top: 10px;
    width: 150px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    background-color: gray;
    color: white;

    &:hover {
      background-color: #1000db;
      color: white;
    }
  }

  .btnDelete {
    &:hover {
      background-color: red;
    }
  }
`

export const ThumbnailContainer = styled.img`
  width: 24rem;
  /* object-fit: fill; */
  margin-top: 0px;
  @media (max-width: 768px) {
    margin: auto;
  }
`
