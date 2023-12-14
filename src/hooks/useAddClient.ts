import { useMutation } from 'react-query'
import { api } from '../services/infiniteWorlApi'

interface registerClientProps {
  name: string
  email: string
  cpf: string
  date: string
  phone: string
}

async function registerClient({
  name,
  email,
  cpf,
  date,
  phone
}: registerClientProps): Promise<void> {
  await api.post('/create', {
    name,
    email,
    cpf,
    date,
    phone
  })
}

export function useAddClient() {
  return useMutation({
    mutationFn: (data: registerClientProps) => registerClient(data)
  })
}
