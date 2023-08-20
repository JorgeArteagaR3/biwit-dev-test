'use client'

import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState
} from 'react'

import { User } from './generated/generated'

interface IUserContext {
  user: User
  setUser: (value: SetStateAction<User>) => void
}

const initialContextValue: IUserContext = {
  setUser: () => {},
  user: { __typename: 'User', id: '', email: '', image: '', name: '' }
}

const UserContext = createContext<IUserContext>(initialContextValue)

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserContext['user']>(
    initialContextValue.user
  )
  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
