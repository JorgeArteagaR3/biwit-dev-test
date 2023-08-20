'use client'
import CreateUserForm from '@/components/CreateUserForm'

import { useUser } from '@/hooks/useUser'

export default function Home() {
  const { loading, user } = useUser()

  if (loading && !user.id)
    return (
      <div className="bg-lime-300 min-h-screen w-full grid place-items-center">
        Loading...
      </div>
    )

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <CreateUserForm />
    </main>
  )
}
