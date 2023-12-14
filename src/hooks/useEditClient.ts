import { useMutation } from 'react-query'
import { api } from '../services/infiniteWorlApi'

export interface UpdateClientProps {
  name: string | undefined
  email: string | undefined
  phone: string | undefined
  clientId: string | undefined
}

async function updateClient({
  name,
  email,
  phone,
  clientId
}: UpdateClientProps) {
  try {
    await api.put(`/client/${clientId}`, {
      name,
      email,
      phone
    })
  } catch (error) {
    throw new Error('Failed to update client')
  }
}

export function useEditClient() {
  return useMutation({
    mutationFn: (data: UpdateClientProps) => updateClient(data)
  })
}
