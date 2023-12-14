// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal } from '../../components/Modal'
import { useAuth } from '../../hooks/useAuth'
import { useDeleteProduct } from '../../hooks/useDeleteProduct'
import { Promotional, useEditProduct } from '../../hooks/useEditProduct'
import { porcentagem } from '../../hooks/usePorcent'
import { useProductDetailsQuery } from '../../hooks/useProductDetail'
import { MainLayout } from '../../layouts/MainLayouts'
import { Product } from '../../models/Product'
import { ModalEditProduct } from '../Products/ModalEditProduct'
import {
  Container,
  ContentContainer,
  ThumbnailContainer,
  DescriptionContainer,
  ButtonsContainer
} from './ProductDetail.styles'

export interface dataProps {
  price: string | undefined
  promotionalPrice: string | undefined
  promotional: Promotional
  productId: string | undefined
}

export function ProductDetail() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const navigate = useNavigate()
  const deleteProduct = useDeleteProduct()
  const { isAuthenticated } = useAuth()
  const params = useParams()
  const { data } = useProductDetailsQuery({
    productId: params.productId as string
  })

  const [successMessage, setSuccessMessage] = useState<string>('')

  const [items, setItems] = useState<Product | undefined>(undefined)
  const editProduct = useEditProduct()

  useEffect(() => {
    setItems(data)
  }, [data])

  const handleDelete = async () => {
    try {
      if (data) {
        await deleteProduct.mutateAsync({ productId: data._id })
        navigate('/products')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const resetComponent = () => {
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
  }

  const handleEditProduct = async ({
    price,
    productId,
    promotional,
    promotionalPrice
  }: dataProps): Promise<Product | undefined> => {
    try {
      const data = {
        price,
        promotionalPrice,
        promotional,
        productId
      }
      const updatedProduct: Product | undefined =
        await editProduct.mutateAsync(data)
      if (updatedProduct) {
        setItems(updatedProduct)
        console.log(updatedProduct)
        setSuccessMessage('Preço atualizado com sucesso.')
        resetComponent()
        return updatedProduct
      }
    } catch (error) {
      console.log(error)
    }
  }

  const closeModal = async (): Promise<void> => {
    setOpenModal(false)
  }

  const closeModalEdit = async (): Promise<void> => {
    setOpenModalEdit(false)
  }

  return (
    <MainLayout>
      {items && (
        <Container>
          {openModal && (
            <Modal
              onDelete={handleDelete}
              onCloseModal={closeModal}
              name="produto"
            />
          )}
          {openModalEdit && (
            <ModalEditProduct
              data={items}
              onCloseModal={closeModalEdit}
              handleEditProduct={handleEditProduct}
              successMessage={successMessage}
            />
          )}
          <ThumbnailContainer
            src={`http://localhost:5000/uploads/${data?.productImage}`}
            alt={items.name}
          />
          <ContentContainer>
            <h3>{items.name}</h3>
            {items.promotional === 'TRUE_PROMOTIONAL' ? (
              <div>
                <p className="pPromotion">Promoção!</p>
                <p className="promotionalPrice">
                  {porcentagem(items.price, items.promotionalPrice)}% OFF
                </p>
                <p className="previouPrice">
                  de <span>{items.price}</span>
                </p>
                <p>Por {items.promotionalPrice}</p>
              </div>
            ) : (
              <p>{items?.price}</p>
            )}
            <DescriptionContainer>
              <h3>O que você precisa saber deste produto</h3>
              <ul>
                {data?.descriptions.map((descript) => (
                  <li key={descript}>{descript}</li>
                ))}
              </ul>
            </DescriptionContainer>

            {/* <ButtonsContainer> */}
            {isAuthenticated ? (
              <ButtonsContainer>
                <button
                  onClick={() => setOpenModal(true)}
                  className="btnDelete"
                >
                  Deletar
                </button>
                <button onClick={() => setOpenModalEdit(true)}>
                  Editar preço
                </button>
              </ButtonsContainer>
            ) : (
              <ButtonsContainer>
                <button>Comprar</button>
              </ButtonsContainer>
            )}
          </ContentContainer>
        </Container>
      )}
    </MainLayout>
  )
}
