import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { useClientDetail } from '../../hooks/useClientDetail'
import { useDeleteClient } from '../../hooks/useDeleteClient'
import { MainLayout } from '../../layouts/MainLayouts'
import { ModalEditClient } from '../Clients/ModelEditClient'
import {
  ButtonsContainer,
  Container,
  DescriptionContainer,
  ImageContainer
} from './ClientDetails.styles'

export function ClientDetails() {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const navigate = useNavigate()
  const params = useParams()
  const { data, isLoading } = useClientDetail({
    clientId: params.clientId as string
  })

  const deleteClient = useDeleteClient()

  const formatarData = (data: string) => {
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const dataObj = new Date(data)
    const dia = String(dataObj.getDate()).padStart(2, '0')
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0')
    const ano = dataObj.getFullYear()
    const idade = anoAtual - ano
    return `${dia}/${mes}/${ano} ${'-'} Idade: ${idade}`
  }

  const handleDelete = async () => {
    try {
      if (data) {
        await deleteClient.mutateAsync({ clientId: data._id })
        navigate('/clients')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const closeModal = async (): Promise<void> => {
    setOpenModalDelete(false)
  }

  const closeModalEdit = async (): Promise<void> => {
    setOpenModalEdit(false)
  }

  return (
    <MainLayout>
      {data && (
        <Container>
          {isLoading && <p>...Carregando</p>}
          {openModalDelete && (
            <Modal
              onDelete={handleDelete}
              onCloseModal={closeModal}
              name="cliente"
            />
          )}
          {openModalEdit && (
            <ModalEditClient
              clientId={data._id}
              onCloseModal={closeModalEdit}
            />
          )}
          <ImageContainer>
            <img src="https://tse3.mm.bing.net/th?id=OIP.L5IWtVZ4PY3xJ8Sr7EUmywHaHa&pid=Api&P=0&h=180" />
          </ImageContainer>
          <DescriptionContainer>
            <h2>Dados do Cliente</h2>
            <p>Nome: {data.name}</p>
            <p>Data de Nascimento: {formatarData(data.date)}</p>
            <p>CPF: {data.cpf}</p>
            <p>Email: {data.email}</p>
            <p>Telefone: {data.phone}</p>
            <ButtonsContainer>
              <button
                onClick={() => setOpenModalDelete(true)}
                className="btnDelete"
              >
                Deletar
              </button>
              <button onClick={() => setOpenModalEdit(true)}>Editar</button>
            </ButtonsContainer>
          </DescriptionContainer>
        </Container>
      )}
    </MainLayout>
  )
}
