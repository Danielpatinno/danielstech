import { useQuery } from 'react-query'

import { Product } from '../models/Product'
import { api } from '../services/infiniteWorlApi'

interface ProductDetailQueryArgs {
  productId: string
}

async function fetchProductDetails({ productId }: ProductDetailQueryArgs) {
  const { data } = await api.get<Product>(`/productDetails/${productId}`)

  return data
}

export function useProductDetailsQuery({ productId }: ProductDetailQueryArgs) {
  return useQuery({
    queryKey: ['product-details', productId],
    queryFn: async () => await fetchProductDetails({ productId })
  })
}
