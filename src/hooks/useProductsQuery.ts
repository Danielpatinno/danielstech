import { useQuery } from 'react-query'

import { Product } from '../models/Product'
import { api } from '../services/infiniteWorlApi'

export interface ProductsQueryResponse {
  totalItems: number
  items: Product[]
}

async function fetchProducts(): Promise<ProductsQueryResponse> {
  const { data } = await api.get('/products')
  return data
}

export function useProductsQuery() {
  return useQuery({
    queryFn: async () => await fetchProducts()
  })
}
