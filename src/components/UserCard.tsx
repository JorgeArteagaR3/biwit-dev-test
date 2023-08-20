import { User } from '@/context/generated/generated'

type Props = {
  user: User
}

export default function UserCard({ user }: Props) {
  return (
    <div className="bg-lime-200 flex flex-col items-center justify-evenly p-4">
      <img
        src={user?.image || 'https://i.imgur.com/ob0ACIm.png'}
        className="h-20 mx-auto mb-2 rounded-lg"
        alt="user image"
      />
      <p>
        <span className="font-bold">Name:</span>
        {user?.name}
      </p>
      <p>
        <span className="font-bold">Email:</span> {user?.email}
      </p>
      <p>
        {' '}
        <span className="font-bold">ID:</span> {user?.id}
      </p>
    </div>
  )
}
