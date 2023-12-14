import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: white;

  input {
    background-color: whitesmoke;
    margin-bottom: 10px;
  }

  form {
    width: 600px;
    height: 550px;
    margin-top: 25px;
    /* border: 1px solid red; */
    border-radius: 10px 0 10px 0;
    padding: 5px 50px;

    @media (max-width: 768px) {
      width: 450px;
    }
  }

  .ulContainer {
    height: 120px;
    border: 1px solid black;
    background: white;
    background-color: whitesmoke;
    color: black;
    ul {
      margin-left: 20px;
    }
  }

  h1 {
    text-align: center;
  }

  button {
    cursor: pointer;
    display: flex;
    /* margin: auto; */
    margin-top: 13px;
    width: 100%;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    transition: 0.4s;

    &:hover {
      /* background-color: #5851db; */
      background-color: black;
      border: 2px solid red;
      color: white;
    }
  }
`

export const InputDescription = styled.div`
  display: flex;

  svg {
    margin-top: 18px;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`
