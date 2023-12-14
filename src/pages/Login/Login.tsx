import {
  AlertBanner,
  Container,
  FormContainer,
  InputContainer,
  LogoContainer
} from './Login.styles'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { useError } from '../../hooks/useError'

const validationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email é obrigatório.' })
    .email({ message: 'Insira um email válido.' }),
  password: z
    .string()
    .min(9, { message: 'A senha deve ter pelo menos 8 caracteres.' })
})

type SignInForm = z.infer<typeof validationSchema>

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInForm>({
    resolver: zodResolver(validationSchema)
  })

  const { signIn, isAuthenticated } = useAuth()
  const { error, handleError, clearError } = useError()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const onSubmit: SubmitHandler<SignInForm> = async (data) => {
    try {
      clearError()
      await signIn(data)

      navigate(from)
    } catch (error) {
      handleError(error)
    }
  }

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <h1>Daniel´s Tech</h1>
        </LogoContainer>
        <p className="titleLogin">LOGIN</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              mask=""
              id="email"
              label="E-mail"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </InputContainer>

          <InputContainer>
            <Input
              mask=""
              id="password"
              label="Senha"
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />
          </InputContainer>

          <button>LOGIN</button>
          {error && (
            <AlertBanner>
              <p>{error}</p>
            </AlertBanner>
          )}
        </form>
      </FormContainer>
    </Container>
  )
}
