import { useMutation } from 'react-query'
import { Product } from '../models/Product'
import { api } from '../services/infiniteWorlApi'

interface deleteProductProps {
  productId: string
}

async function deleteProduc({ productId }: deleteProductProps) {
  await api.delete<Product>(`/deleteProduct/${productId}`)
}

export function useDeleteProduct() {
  return useMutation({
    mutationFn: (productId: deleteProductProps) => deleteProduc(productId)
  })
}
