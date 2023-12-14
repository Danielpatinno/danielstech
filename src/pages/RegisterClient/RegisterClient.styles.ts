import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 71vh;
  color: white;

  input {
    background-color: whitesmoke;
    margin-bottom: 10px;
  }

  form {
    width: 600px;
    height: 450px;
    max-height: 500px;
    border: 2px solid black;
    border-radius: 10px 0 10px 0;
    padding: 30px 50px;

    @media (max-width: 768px) {
      width: 480px;
    }
  }

  h1 {
    text-align: center;
  }

  button {
    cursor: pointer;
    display: flex;
    margin: auto;
    margin-top: 13px;
    width: 100%;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    transition: 0.4s;

    &:hover {
      background-color: black;
      border: 2px solid red;
      color: white;
    }
  }
`
