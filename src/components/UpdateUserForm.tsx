'use client'
import { UserContext } from '@/context/UserContext'
import { useUpdateUserMutation } from '@/context/generated/generated'
import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useEffect,
  useState
} from 'react'

function UpdateUserForm() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    image: ''
  })

  const [updateUserMutation, { data, error, loading }] = useUpdateUserMutation()
  console.log('created', data?.updateUser)
  const { user, setUser } = useContext(UserContext)

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    try {
      updateUserMutation({
        variables: {
          input: {
            id: user.id,
            email: formData.email || undefined,
            name: formData.name || undefined,
            image: formData.image || undefined
          }
        }
      })
      if (data) {
        setUser(data.updateUser.user!)
      }
    } catch (e) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (data && data?.updateUser) {
      setUser(data.updateUser.user!)
    }
  }, [data])

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setformData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <form
      action=""
      className="grid grid-cols-1 gap-4 border p-4 bg-green-300"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-center">Update User</h2>
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
        Image URL
        <input
          type="text"
          className="border block"
          name="image"
          onChange={handleInputChange}
        />
      </label>
      <button className="mt-4 bg-blue-500 text-white rounded-lg">Update</button>
    </form>
  )
}

export default UpdateUserForm
