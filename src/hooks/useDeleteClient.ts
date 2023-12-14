import { useMutation } from 'react-query'
import { Cliente } from '../models/Client'
import { api } from '../services/infiniteWorlApi'

interface deleteClientProps {
  clientId: string
}

async function deleteClient({ clientId }: deleteClientProps) {
  await api.delete<Cliente>(`/delete/${clientId}`)
}

export function useDeleteClient() {
  return useMutation({
    mutationFn: (clientId: deleteClientProps) => deleteClient(clientId)
  })
}
