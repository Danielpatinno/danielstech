import { useQuery } from 'react-query'

import { Cliente } from '../models/Client'
import { api } from '../services/infiniteWorlApi'

interface ClientsQueryResponse {
  totalClients: number
  clients: Cliente[]
}

async function fetchClients(): Promise<ClientsQueryResponse> {
  const { data } = await api.get('/clients')
  return data
}

export function useClientsQuery() {
  return useQuery({
    queryFn: async () => await fetchClients()
  })
}
