import { createContext, useState } from 'react'

import { UserType } from '@/types/user'

export interface UserContextType {
  user: UserType | null
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children }: UserProviderProps): React.ReactNode => {
  const [user, setUser] = useState<UserType | null>(null)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
