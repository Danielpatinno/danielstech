import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
`

export const FormContainer = styled.div`
  width: 300px;
  margin-top: -140px;

  form {
    button {
      width: 100%;
      margin-top: 10px;
      padding: 5px;
      cursor: pointer;
      background-color: red;
      color: white;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
        background-color: wheat;
        color: black;
      }
    }
  }

  p.titleLogin {
    padding: 5px;
    font-weight: bold;
    font-size: large;
    text-align: center;
  }
`

export const InputContainer = styled.div`
  width: 300px;
  margin-top: 5px;
`

export const LogoContainer = styled.div`
  margin-bottom: 5px;
  text-align: center;
`

export const AlertBanner = styled.div`
  text-align: center;
  margin-top: 15px;
  border: 1px solid red;
  padding: 6px;
  color: white;
  border-radius: 5px;
  background-color: red;
`
