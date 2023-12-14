import { ReactNode } from 'react'
import { Navbar } from '../../components/Navbar'
import { Container, Main } from './MainLayouts.styles'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container>
      <Navbar />

      <Main>{children}</Main>
    </Container>
  )
}
