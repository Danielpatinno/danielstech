import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  /* background-color: #281c4d; */
  background-color: black;
  height: 100px;
  color: white;
  border-bottom: 1px solid red;

  h2 {
    font-size: 2em;
    color: white;
    text-align: center;
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 70px;
  }
`

export const Information = styled.div`
  position: absolute;
  text-align: center;
  height: 20px;
  width: 100%;
  background-color: black;
`

export const HeaderContainer = styled.div`
  max-width: 120rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  height: 70px;
  padding: 0 0px;
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  background-color: black;

  h2 {
    position: absolute;
  }

  nav {
    display: flex;
    position: absolute;
    top: 68px;

    a {
      margin: 8px;
      padding: 0 10px;
      color: white;
      font-size: larger;
      text-decoration: none;
      box-sizing: border-box;
      border: 1px solid transparent;
      /* background-color: black; */

      &:hover {
        border-right: 1px solid blue;
        border-left: 1px solid blue;
      }
    }
  }
`

export const NavContainer = styled.div`
  margin-top: 10px;

  &:hover > div {
    display: flex;
  }

  div {
    background-color: black;
    display: flex;
    flex-direction: column;
    display: none;
    border-radius: 0 0 10px 10px;
  }
`

export const DetailsContainer = styled.div`
  position: relative;
  top: 68px;
  width: 150px;
  height: 30px;

  @media (max-width: 768px) {
    margin-right: -50px;
  }

  svg {
    margin-right: 8px;
    cursor: pointer;
    color: green;

    &:hover {
      color: #25d366 !important;
    }
  }

  svg.iconExit {
    margin-left: 50px;

    @media (max-width: 768px) {
      margin-left: 20px;
    }

    &:hover {
      color: blue !important;
    }
  }

  a {
    margin: 5px;
    padding: 0 10px;
    color: white;
    font-size: larger;
    text-decoration: none;
    box-sizing: border-box;
    border: 1px solid transparent;

    &:hover {
      border-right: 1px solid blue;
      border-left: 1px solid blue;
      border-radius: 10px;
      background-color: white;
      color: #281c4d;
    }
  }
`

export const SoonContainer = styled.div``
