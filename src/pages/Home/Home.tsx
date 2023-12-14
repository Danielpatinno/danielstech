import { useEffect, useState } from 'react'
import { Carousel } from '../../components/Carrosel'
// import { Input } from '../../components/Input'
import { useProductsQuery } from '../../hooks/useProductsQuery'
import { MainLayout } from '../../layouts/MainLayouts'
import {
  CarroselContainer,
  // Container,
  ContainerPrincipal,
  DescriptionContainer,
  LogoContainer,
  PromotionsContainer,
  ThumbnailContainer
} from './Home.styles'

export function Home() {
  const { data } = useProductsQuery()
  const lengtImg: number = data?.totalItems as number
  const [currentImg, setCurrentImg] = useState<number>(0)
  const [nextImg, setNextImg] = useState<number>(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImg((nextImg + 1) % lengtImg)
      setCurrentImg(nextImg)
    }, 7000)

    return () => clearInterval(interval)
  }, [currentImg, lengtImg, nextImg])

  return (
    <MainLayout>
      <ContainerPrincipal>
        {/* <Container> */}
        <DescriptionContainer>
          <div>
            <p>Visitando a Daniel´s Tech ?</p>
            <p>Trabalhamos com varias marcas de celulares</p>

            <LogoContainer>
              <img
                src="https://www.freepngimg.com/thumb/apple/58780-logo-apple-iphone-free-photo-png.png"
                alt="Apple"
              />
              <img
                src="https://logosmarcas.net/wp-content/uploads/2020/04/Samsung-Logo.png"
                alt="Samsung"
              />
              <img
                src="https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png"
                alt="Motorola"
              />
              <img
                src="https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-0.png"
                alt="Lenovo"
              />
              <img
                src="https://marcas-logos.net/wp-content/uploads/2019/11/Xiaomi-Logo.png"
                alt="Xiaomi"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/05/LG-Symbol.png"
                alt="LG"
              />
            </LogoContainer>
          </div>

          <ThumbnailContainer>
            {data?.items && data.items.length > 0 && (
              <>
                <img
                  style={{ opacity: currentImg === nextImg ? 0 : 1 }}
                  src={`http://localhost:5000/uploads/${data?.items[currentImg].productImage}`}
                  alt="thumb"
                />
                <img
                  style={{ opacity: currentImg === nextImg ? 1 : 0 }}
                  src={`http://localhost:5000/uploads/${data?.items[nextImg].productImage}`}
                  alt="thumb"
                />
              </>
            )}
          </ThumbnailContainer>
        </DescriptionContainer>
        <CarroselContainer>
          <Carousel />
        </CarroselContainer>
        {/* </Container> */}
        <PromotionsContainer>
          <div></div>
        </PromotionsContainer>
      </ContainerPrincipal>
    </MainLayout>
  )
}
