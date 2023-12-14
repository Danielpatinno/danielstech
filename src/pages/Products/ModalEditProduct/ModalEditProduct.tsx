import { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format'
import { Message } from '../../../components/Message'
import { Promotional } from '../../../hooks/useEditProduct'
import { Product } from '../../../models/Product'
import { dataProps } from '../../ProductDetail/ProductDetail'

import {
  ButtonsContainer,
  Container,
  ContainerModal,
  LabelContainer,
  Thumbnail,
  ThumbnailContainer
} from './ModalEditProduct.styles'

interface modalEditProps {
  data: Product | undefined
  successMessage: string
  onCloseModal: () => Promise<void>
  handleEditProduct: (data: dataProps) => Promise<Product | undefined>
}

export function ModalEditProduct({
  data,
  successMessage,
  handleEditProduct,
  onCloseModal
}: modalEditProps) {
  const [price, setPrice] = useState<string | undefined>('')
  const [promotionalPrice, setPricePromotional] = useState<string | undefined>(
    ''
  )
  const [promotional, setPromotional] =
    useState<Promotional>('FALSE_PROMOTIONAL')
  const [productId, setProductId] = useState<string | undefined>('')
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    if (data?.promotional === 'TRUE_PROMOTIONAL') {
      setIsChecked(true)
      setPricePromotional(data?.promotionalPrice)
    }
    setPrice(data?.price)
    setProductId(data?._id)
    console.log()
  }, [data])

  useEffect(() => {
    if (isChecked) {
      setPromotional('TRUE_PROMOTIONAL' as Promotional)
    } else {
      setPromotional('FALSE_PROMOTIONAL' as Promotional)
    }
  }, [isChecked])

  const handleClick = async () => {
    const data = {
      price,
      promotional,
      promotionalPrice,
      productId
    }

    try {
      await handleEditProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Container>
      <ContainerModal>
        <LabelContainer>
          <ThumbnailContainer>
            <Thumbnail
              src={`http://localhost:5000/uploads/${data?.productImage}`}
              alt={data?.name}
            />
          </ThumbnailContainer>
          <p>{data?.name}</p>
          <label>Preço:</label>
          <NumericFormat
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fixedDecimalScale
            decimalScale={2}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            placeholder="R$ 0,00"
          />
          <label>Preço promocional ?</label>
          <input
            type="checkbox"
            name="opcao1"
            value="promocional"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {isChecked && (
            <LabelContainer>
              <label>Preço:</label>
              <NumericFormat
                value={promotionalPrice}
                onChange={(e) => setPricePromotional(e.target.value)}
                fixedDecimalScale
                decimalScale={2}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                placeholder="R$ 0,00"
              />
            </LabelContainer>
          )}
        </LabelContainer>

        <ButtonsContainer>
          <button onClick={handleClick}>Salvar</button>
          <button className="btnDelete" onClick={onCloseModal}>
            Cancelar
          </button>
        </ButtonsContainer>
        {successMessage && <Message msg={successMessage} type="success" />}
      </ContainerModal>
    </Container>
  )
}
