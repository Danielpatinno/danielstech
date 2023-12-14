import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 85.7vh;
  margin-top: auto;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ContainerModal = styled.div`
  border: 2px solid red;
  width: 350px;
  height: 200px;
  margin: auto;
  margin-top: 40px;
  background-color: black;
  color: white;

  h1 {
    background-color: red;
    color: white;
    text-align: center;
  }

  p {
    font-size: x-large;
    text-align: center;
  }
`

export const ButtonsContainer = styled.div`
  margin-left: 85px;

  button {
    cursor: pointer;
    width: 80px;
    height: 25px;
    border-radius: 10px;
    margin: auto;
    margin-top: 20px;
    align-items: center;
  }

  .btnDelete {
    &:hover {
      background-color: red;
      color: white;
    }
  }

  .btnCancel {
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`
