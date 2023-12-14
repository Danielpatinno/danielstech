import { Container, InputDescription } from './RegisterProduct.styles'

import { MainLayout } from '../../layouts/MainLayouts'

import { useAddProduct } from '../../hooks/useAddProduct'
import { useForm, SubmitHandler } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Input'
import { useError } from '../../hooks/useError'
import { useState } from 'react'
import { Message } from '../../components/Message'

import { IoIosAddCircle } from 'react-icons/io'
import { InputMonetario } from '../../components/InputMonetario'

const validationProduct = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório.' }),
  price: z.string().min(1, { message: 'Preço é obrigatório.' }),
  codig: z.string().min(1, { message: 'Código é obrigatório.' })
  // descriptions: z.string().min(1, { message: 'Escreva uma descrição' })
  // ,
  // productImage: z.string().min(1, { message: 'Preço é obrigatório.' })
})

type SignInForm = z.infer<typeof validationProduct>

export function RegisterProduct() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [descript, setDescript] = useState<string>('')
  const [descriptions, setDescriptions] = useState<string[]>([])
  const addProduct = useAddProduct()
  const { error } = useError()
  const [successMessage, setSuccessMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SignInForm>({
    resolver: zodResolver(validationProduct)
  })

  const resetComponent = () => {
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      setSelectedFile(file)
    }
  }

  const onSubmit: SubmitHandler<SignInForm> = async (data: SignInForm) => {
    try {
      setSuccessMessage('')
      if (selectedFile) {
        const productData = {
          name: data.name,
          price: data.price,
          codig: data.codig,
          productImage: selectedFile,
          descriptions: descriptions
        }
        await addProduct.mutateAsync(productData)
        setSuccessMessage('Produto cadastrado com sucesso.')
        reset()
        resetComponent()
        setDescriptions([])
        window.location.reload()
      }
    } catch (error) {
      console.error('Erro ao fazer o POST:', error)
    }
  }

  const handleAddDescription = () => {
    if (descript) {
      const newDescription: string = descript
      const newArray = [...descriptions, newDescription]
      setDescriptions(newArray)
      setDescript('')
    }
  }

  return (
    <MainLayout>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastrar Produto</h1>
          {/* {step == 1 ? (
            <div> */}
          <Input
            placeholder="Digite o nome do produto"
            id="name"
            label="Nome Produto"
            type="text"
            mask=""
            error={errors.name?.message}
            {...register('name')}
          />
          <InputMonetario
            inputProps={{ label: 'Preço', id: 'price' }}
            {...register('price')}
          />
          <Input
            placeholder="Código do produto"
            id="codig"
            label="Código do produto"
            type="text"
            mask=""
            error={errors.codig?.message}
            {...register('codig')}
          />
          <Input
            id="productImage"
            label="Escolha uma imagem"
            type="file"
            mask=""
            onChange={handleFileChange}
          />

          <InputDescription>
            <Input
              type="text"
              id="descriptions"
              mask=""
              label="Descrição do produto"
              value={descript}
              placeholder="Digite aqui"
              onChange={(e) => setDescript(e.target.value)}
            />

            <IoIosAddCircle
              size={35}
              onClick={handleAddDescription}
              title="Adicionar descrição"
            />
          </InputDescription>

          <div className="ulContainer">
            <ul>
              {descriptions.map((descrip) => (
                <li key={descrip}>{descrip}</li>
              ))}
            </ul>
          </div>

          <button type="submit">Cadastrar</button>
          {/* <Message type="success" msg="Produto cadastrado com sucesso" /> */}
          {successMessage && <Message type="success" msg={successMessage} />}
          {error && <Message type="error" msg={error} />}
        </form>
      </Container>
    </MainLayout>
  )
}
