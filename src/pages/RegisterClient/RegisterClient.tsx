import { MainLayout } from '../../layouts/MainLayouts'

import { useAddClient } from '../../hooks/useAddClient'
import { useForm, SubmitHandler } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Input'
import { useError } from '../../hooks/useError'
import { Container } from './RegisterClient.styles'
import { Message } from '../../components/Message'
import { useState } from 'react'

const validationClient = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório.' }),
  email: z
    .string()
    .min(9, { message: 'E-mail é obrigatório.' })
    .email({ message: 'Insira um e-mail válido.' }),
  cpf: z.string().min(14, { message: 'CPF é obrigatório.' }),
  date: z.string(),
  phone: z.string().min(9, { message: 'Insira um telefóne válido.' })
})

type SignInForm = z.infer<typeof validationClient>

export function RegisterClient() {
  const addClient = useAddClient()
  const { error } = useError()
  const [successMessage, setSuccessMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SignInForm>({
    resolver: zodResolver(validationClient)
  })

  const resetComponent = () => {
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
  }

  const onSubmit: SubmitHandler<SignInForm> = async (data: SignInForm) => {
    setSuccessMessage('')
    try {
      await addClient.mutateAsync(data)
      setSuccessMessage('Cliente cadastrado com sucesso.')

      reset()

      resetComponent()
      window.location.reload()
    } catch (error) {
      console.error('Erro ao fazer o POST:', error)
    }
  }

  return (
    <MainLayout>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro de cliente</h1>
          <Input
            placeholder="Digite seu nome"
            id="name"
            label="Nome"
            type="text"
            mask=""
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            placeholder="Digite seu e-mail"
            id="email"
            label="E-mail"
            type="text"
            mask=""
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            placeholder="000.000.000-00"
            id="cpf"
            label="CPF"
            type="text"
            mask="999.999.999-99"
            error={errors.cpf?.message}
            {...register('cpf')}
          />
          <Input
            id="date"
            label="Nascimento"
            type="date"
            mask=""
            error={errors.date?.message}
            {...register('date')}
          />
          <Input
            placeholder="(00) 00000-0000"
            id="phone"
            label="Telefone"
            type="text"
            mask="(99) 99999-9999"
            error={errors.phone?.message}
            {...register('phone')}
          />
          <button>Salvar</button>
          {successMessage && (
            <Message type="success" msg="Cliente criado com sucesso" />
          )}
          {error && <Message type="error" msg={error} />}
        </form>
      </Container>
    </MainLayout>
  )
}
