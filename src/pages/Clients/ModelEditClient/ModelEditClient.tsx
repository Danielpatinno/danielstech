import { useEffect, useState } from 'react'
import { Input } from '../../../components/Input'
import { Message } from '../../../components/Message'
import { useClientDetail } from '../../../hooks/useClientDetail'
import { useEditClient } from '../../../hooks/useEditClient'
import {
  Container,
  ButtonsContainer,
  ContainerModal
} from './ModelEditClient.styles'

interface modalProps {
  clientId: string
  onCloseModal: () => Promise<void>
}

export function ModalEditClient({ onCloseModal, clientId }: modalProps) {
  const { data } = useClientDetail({ clientId })
  const editClient = useEditClient()

  const [name, setName] = useState<string | undefined>('')
  const [email, setEmail] = useState<string | undefined>('')
  const [phone, setPhone] = useState<string | undefined>('')

  const [successMessage, setSuccessMessage] = useState<string>('')

  useEffect(() => {
    setName(data?.name)
    setEmail(data?.email)
    setPhone(data?.phone)
  }, [data])

  const resetComponent = () => {
    setTimeout(() => {
      setSuccessMessage('')
      window.location.reload()
    }, 3000)
  }

  const handleEdit = async () => {
    try {
      const data = {
        name,
        email,
        phone,
        clientId
      }
      await editClient.mutateAsync(data)
      setSuccessMessage('Cliente atualizado com sucesso.')
      resetComponent()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ContainerModal>
        <h1>Editar dados do cliente</h1>
        <Input
          label="Nome"
          mask=""
          placeholder="Dígite o nome aqui"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="E-mail"
          mask=""
          placeholder="Dígite o nome aqui"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Telefone"
          mask="(99) 99999-9999"
          placeholder="Dígite o nome aqui"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <ButtonsContainer>
          <button onClick={handleEdit}>Salvar</button>
          <button className="btnCancel" onClick={onCloseModal}>
            Cancelar
          </button>
        </ButtonsContainer>
        {successMessage && <Message msg={successMessage} type="success" />}
      </ContainerModal>
    </Container>
  )
}
