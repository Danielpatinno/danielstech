import { Container, ButtonsContainer, ContainerModal } from './Modal.styles'

interface modalProps {
  onCloseModal: () => Promise<void>
  onDelete: () => Promise<void>
  name: string
}

export function Modal({ onCloseModal, onDelete, name }: modalProps) {
  return (
    <Container>
      <ContainerModal>
        <h1>Atenção</h1>
        <p>Deseja excluir o {name} ?</p>
        <ButtonsContainer>
          <button className="btnDelete" onClick={onDelete}>
            Excluir
          </button>
          <button className="btnCancel" onClick={onCloseModal}>
            Cancelar
          </button>
        </ButtonsContainer>
      </ContainerModal>
    </Container>
  )
}
