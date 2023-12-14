import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  margin-top: auto;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ContainerModal = styled.div`
  border: 2px solid black;
  width: 400px;
  height: 550px;
  margin: auto;
  padding: 25px 40px;
  margin-top: 0px;
  background-color: black;
  color: white;

  h1 {
    margin-bottom: 10px;
    color: white;
    text-align: center;
  }

  label {
    font-size: large;
  }

  input {
    padding: 5px;
    margin-bottom: 10px;
  }

  p {
    font-size: x-large;
    text-align: center;
  }
`

export const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  align-items: center;
  margin-bottom: 5px;
`

export const Thumbnail = styled.img`
  height: 200px;
  width: 200px;
  margin: auto;
  background-color: white;
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  input[type='checkbox'] {
    margin-top: -15px;
    border-radius: 50%;
  }
`

export const ButtonsContainer = styled.div`
  margin-left: 70px;

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
      /* background-color: red; */
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
      background-color: gray;
      color: white;
    }
  }
`
