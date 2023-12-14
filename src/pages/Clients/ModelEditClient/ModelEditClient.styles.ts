import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 85.7vh;
  /* margin-top: auto; */
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 440px;
  }
`

export const ContainerModal = styled.div`
  border: 2px solid black;
  width: 500px;
  height: 330px;
  margin: auto;
  padding: 25px 40px;
  border: 2px solid red;
  /* margin-top: 40px; */
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    width: 400px;
    margin: auto;
    /* margin-right: ; */
  }
  h1 {
    /* background-color: black; */
    margin-bottom: 10px;
    color: white;
    text-align: center;
  }

  p {
    font-size: x-large;
    text-align: center;
  }
`

export const ButtonsContainer = styled.div`
  margin-left: 110px;

  @media (max-width: 768px) {
    margin-left: 70px;
  }

  button {
    cursor: pointer;
    width: 100px;
    height: 25px;
    border-radius: 10px;
    margin: auto;
    margin-top: 20px;
    align-items: center;

    &:hover {
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.8);
    }
  }

  .btnDelete {
    &:hover {
      background-color: red;
      color: white;
    }
  }

  .btnCancel {
    &:hover {
      background-color: red;
      color: white;
    }
  }
`
