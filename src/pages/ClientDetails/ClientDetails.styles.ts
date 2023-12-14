import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 765px;
  height: 300px;
  margin-top: 10px;
  background-color: black;
  color: white;
  margin: auto;

  @media (max-width: 768px) {
    display: block;
    margin-left: 40px;
    width: 300px;
  }
  /* margin: auto; */
`

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 18px;
  background-color: black;

  img {
    border-radius: 50%;
    margin-left: 10px;
  }
`

export const DescriptionContainer = styled.div`
  margin-top: 35px;
  margin-right: 30px;

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-size: large;
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`

export const ButtonsContainer = styled.div`
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
