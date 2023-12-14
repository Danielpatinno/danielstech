import { styled } from 'styled-components'

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 70vh;

  p {
    color: white;
    text-align: center;
    font-size: large;
  }
`

export const CarroselContainer = styled.div`
  width: 600px;
  margin: auto;
  /* border: 2px solid red; */
  /* height: 100px; */
  /* display: flex; */
  img {
    /* margin: auto; */
    width: 100%;
    max-height: 170px;
  }

  @media (max-width: 768px) {
    width: 330px;
    /* margin-right: 0px; */
  }
`

// export const Container = styled.div`
//   display: flex;
//   background-color: #281c4d;
//   justify-content: space-around;
//   background-color: white;
//   width: 100%;
//   height: 70vh;
// `

export const DescriptionContainer = styled.div`
  display: flex;
  margin: auto;
  gap: 1px;
  justify-content: space-between;
  width: 100%;
  height: 430px;
  /* border: 2px solid red; */

  div {
    /* margin-bottom: 40px; */
    flex: 1;
    margin-top: 20px;
  }

  p {
    font-size: large;
    font-family: 'Pridi', serif;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
    display: flex;
    height: 700px;
    gap: 0px;
    width: 370px;
    /* margin-right: 0px; */
  }
`

export const LogoContainer = styled.div`
  width: 400px;
  height: 200px;
  margin: auto;

  img {
    width: 120px;
    height: 100px;
    margin-left: 10px;

    &:hover {
      box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 150);
      cursor: pointer;
      border-radius: 10px;
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
`

export const ThumbnailContainer = styled.div`
  margin: auto;
  overflow: hidden;
  height: 100%;

  img {
    margin: auto;
    width: 500px;
    height: 420px;
    border-radius: 10px;
    transition:
      opacity 0.8s ease-in-out,
      transform 0.8s;
    transition-delay: 0.1s;
    box-shadow: 0px 7px 10px 5px rgba(0, 0, 0, 150);

    @media (max-width: 768px) {
      width: 300px;
      height: 350px;
      margin-left: 70px;
    }
  }
`

export const PromotionsContainer = styled.div``
