import { useMutation } from 'react-query'
import { api } from '../services/infiniteWorlApi'

interface Manager {
  _id: number
  name: string
  email: string
}

interface SignInManager {
  email: string
  password: string
}

interface SignInResponse {
  manager: Manager
  token: string
}

async function signInUser({
  email,
  password
}: SignInManager): Promise<SignInResponse> {
  const { data } = await api.post<SignInResponse>('/loginManager', {
    email,
    password
  })

  return data
}

export function useSignIn() {
  return useMutation({ mutationFn: (data: SignInManager) => signInUser(data) })
}
