import { useQuery } from 'react-query'

import { Cliente } from '../models/Client'
import { api } from '../services/infiniteWorlApi'

interface ClientQueryResponse {
  totalClients: number
  clients: Cliente[]
}

interface ClientQueryArgs {
  search: string
}

async function fetchClientsById({
  search
}: ClientQueryArgs): Promise<ClientQueryResponse> {
  const { data } = await api.get(`/searchClient?q=${search}`)
  return data
}

export function useClientQuerySearch({ search }: ClientQueryArgs) {
  return useQuery({
    queryKey: ['clients', search],
    queryFn: async () => await fetchClientsById({ search })
  })
}
