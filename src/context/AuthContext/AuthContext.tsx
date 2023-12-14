import { createContext, PropsWithChildren, useState } from 'react'
import { INFINITI_WORLD_SESSION_KEY } from '../../constants/storage'
import { useSignIn } from '../../hooks/useSignIn'

interface Manager {
  _id: number
  name: string
  email: string
}

interface SignInManager {
  email: string
  password: string
}

interface Session {
  manager: Manager
  token: string
}

interface AuthContextType {
  manager?: Manager
  isAuthenticated: boolean
  signIn: (manager: SignInManager) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(() => {
    const localSession = localStorage.getItem(INFINITI_WORLD_SESSION_KEY)

    if (localSession) {
      return JSON.parse(localSession)
    }

    return null
  })

  const signInMutation = useSignIn()

  const signIn = async (manager: SignInManager): Promise<void> => {
    await signInMutation.mutateAsync(manager, {
      onSuccess: (session) => {
        setSession(session)

        localStorage.setItem(
          INFINITI_WORLD_SESSION_KEY,
          JSON.stringify(session)
        )
      }
    })
  }

  const signOut = async (): Promise<void> => {
    try {
      localStorage.removeItem(INFINITI_WORLD_SESSION_KEY)
      setSession(null)
    } catch (error) {
      console.log('Erro ao fazer logout:' + error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(session),
        manager: session?.manager,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
