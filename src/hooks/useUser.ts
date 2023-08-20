import { useEffect, useContext } from 'react'
import { useGetCurrentUserQuery } from '@/context/generated/generated'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

export const useUser = () => {
  const { user, setUser } = useContext(UserContext)
  const { error, data, loading } = useGetCurrentUserQuery()
  const router = useRouter()

  useEffect(() => {
    console.log({ error })
    if (data && data.currentUser?.user) {
      setUser(data?.currentUser.user!)
    }
  }, [data])

  useEffect(() => {
    if (user?.id) {
      router.push('/dashboard')
    } else {
      router.push('/')
    }
  }, [user])

  return { user, setUser, error, loading, data }
}
