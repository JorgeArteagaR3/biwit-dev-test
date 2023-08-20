'use client'
import { UserContext } from '@/context/UserContext'
import { useCreateUserMutation } from '@/context/generated/generated'

import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useEffect,
  useState
} from 'react'

function CreateUserForm() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    image: ''
  })
  const [createUserMutation, { data, error, loading }] = useCreateUserMutation()
  console.log('created', data?.createUser)
  const { setUser } = useContext(UserContext)

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    try {
      createUserMutation({
        variables: { input: formData }
      })
    } catch (e) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (data && data?.createUser) {
      setUser(data.createUser.user!)
    }
  }, [data])

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setformData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form
      action=""
      className="grid grid-cols-1 gap-4 border p-4 bg-slate-300"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-center">Create User</h2>
      <label>
        Name
        <input
          type="text"
          className="border block"
          name="name"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          className="border block"
          name="email"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Image URL (optional)
        <input
          type="text"
          className="border block"
          name="image"
          onChange={handleInputChange}
        />
      </label>
      <button className="mt-4 bg-fuchsia-900 text-white rounded-lg">
        Create
      </button>
    </form>
  )
}

export default CreateUserForm
