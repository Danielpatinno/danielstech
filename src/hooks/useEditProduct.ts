import { useMutation } from 'react-query'
import { Product } from '../models/Product'
import { api } from '../services/infiniteWorlApi'

export type Promotional = 'TRUE_PROMOTIONAL' | 'FALSE_PROMOTIONAL'

interface UpdateProductPros {
  price: string | undefined
  promotionalPrice: string | undefined
  promotional: Promotional
  productId: string | undefined
}

async function updateProduct({
  price,
  promotionalPrice,
  promotional,
  productId
}: UpdateProductPros) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resposta = await api.put<Product | undefined, any>(
      `/product/${productId}`,
      {
        price,
        promotionalPrice,
        promotional
      }
    )

    return resposta.data.product
  } catch (error) {
    console.log(error)
  }
}

export function useEditProduct() {
  return useMutation({
    mutationFn: (data: UpdateProductPros) => updateProduct(data)
  })
}
