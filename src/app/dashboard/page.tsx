'use client'
import UpdateUserForm from '@/components/UpdateUserForm'
import UserCard from '@/components/UserCard'
import { useDeleteUserMutation } from '@/context/generated/generated'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'

function DashboardPage() {
  const { loading, user, setUser } = useUser()

  const [deleteUserMutation, _] = useDeleteUserMutation()

  const router = useRouter()

  const handleDeleteUser = () => {
    deleteUserMutation({
      variables: {
        input: { id: user?.id }
      }
    })
    router.push('/')

    setUser(prev => ({
      ...prev,
      __typename: 'User',
      id: '',
      email: '',
      image: '',
      name: ''
    }))
  }
  if (loading && !user?.id)
    return (
      <div className="bg-lime-300 min-h-screen w-full grid place-items-center">
        Loading...
      </div>
    )

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="flex gap-5">
        <UserCard user={user} />
        <UpdateUserForm />
        <div className="bg-red-300 flex justify-center items-center px-10">
          <button
            className="bg-red-500 p-2 hover:bg-red-600 duration-150 font-bold"
            onClick={handleDeleteUser}
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
