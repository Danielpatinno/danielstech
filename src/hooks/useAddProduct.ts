import { useMutation } from 'react-query'
import { api } from '../services/infiniteWorlApi'

interface registerProductProsp {
  name: string
  price: string
  codig: string
  productImage: File
  descriptions: string[]
}

async function registerProduct({
  name,
  price,
  codig,
  productImage,
  descriptions
}: registerProductProsp): Promise<void> {
  await api.post(
    '/createProduct',
    {
      name,
      price,
      codig,
      productImage,
      descriptions
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}

export function useAddProduct() {
  return useMutation({
    mutationFn: (data: registerProductProsp) => registerProduct(data),
    onSuccess: () => {
      console.log('Produto cadastrado com sucesso.')
    }
  })
}
