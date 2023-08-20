import { Resolvers } from '@/context/generated/generated'

const resolver: Resolvers = {
  UserResponse: {
    user: v => v.user
  },
  User: {
    id: user => user.id,
    email: user => user.email,
    name: user => user.name,
    image: user => user.image
  },
  Query: {
    currentUser: async (_, __, contextValue) => {
      const user = await contextValue.user.findFirst()
      return { user, __typename: 'UserResponse' }
    }
  },

  Mutation: {
    updateUser: async (_, { input }, context) => {
      const updatedUser = await context.user.update({
        where: { id: input.id },
        data: input
      })
      return { user: updatedUser, __typename: 'UserResponse' }
    },
    createUser: async function name(_, { input }, context) {
      const createdUser = await context.user.create({ data: input })
      return { user: createdUser, __typename: 'UserResponse' }
    },
    deleteUser: async (_, { input }, context) => {
      const deletedUser = await context.user.delete({
        where: { id: input.id }
      })
      return { user: deletedUser, __typename: 'UserResponse' }
    }
  }
}

export default resolver
