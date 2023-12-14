import { useQuery } from 'react-query'

import { Cliente } from '../models/Client'
import { api } from '../services/infiniteWorlApi'

interface ClientDetailQueryArgs {
  clientId: string
}

async function fetchClientDetails({ clientId }: ClientDetailQueryArgs) {
  const { data } = await api.get<Cliente>(`/clientDetails/${clientId}`)

  return data
}

export function useClientDetail({ clientId }: ClientDetailQueryArgs) {
  return useQuery({
    queryKey: ['client-details', clientId],
    queryFn: async () => await fetchClientDetails({ clientId })
  })
}
