import { Link } from 'react-router-dom'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { ImExit } from 'react-icons/im'

import {
  Container,
  HeaderContainer,
  DetailsContainer,
  NavbarContainer,
  NavContainer,
  Information
} from './Navbar.styles'
import { useAuth } from '../../hooks/useAuth'

export function Navbar() {
  const { signOut, isAuthenticated } = useAuth()

  const handleLogout = async () => {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Information>
        <p>Atendimento de segunda a sexta das 09:00 ás 18:00</p>
      </Information>
      <HeaderContainer>
        <NavbarContainer>
          <h2>DANIEL´S TECH</h2>

          {isAuthenticated ? (
            <nav>
              <Link to="/">Home</Link>
              <NavContainer>
                <Link className="openSub" to="">
                  Cadastro
                </Link>

                <div>
                  <Link to="/registerproduct">Produtos</Link>
                  <Link to="/registerclient">Cliente</Link>
                </div>
              </NavContainer>
              <NavContainer>
                <Link className="openSub" to="">
                  Consulta
                </Link>

                <div>
                  <Link to="/products">Produtos</Link>
                  <Link to="/clients">Cliente</Link>
                </div>
              </NavContainer>
            </nav>
          ) : (
            <nav>
              <Link to="/">Home</Link>
              <Link to="/products">Produtos</Link>
            </nav>
          )}
        </NavbarContainer>

        <DetailsContainer>
          <BsWhatsapp color="green" size={25} />
          <BsInstagram color="#5851DB" size={25} />
          {isAuthenticated ? (
            <ImExit
              onClick={handleLogout}
              color="white"
              size={25}
              className="iconExit"
              title="Sair"
            />
          ) : (
            <Link to="/login">Login</Link>
          )}
        </DetailsContainer>
      </HeaderContainer>
    </Container>
  )
}
