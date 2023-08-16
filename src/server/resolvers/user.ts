import { Resolvers } from '@/context/generated/generated'

const resolver: Resolvers = {
  UserResponse: {
    user: v => v.user
  },
  User: {
    id: user => user.id,
    email: user => user.email,
    name: user => user.name
  },
  Query: {
    // currentUser: async (_, __, contextValue) => {
    // }
  },

  Mutation: {
    // updateUser: async (_, { input }) => {
    //
    // }
  }
}

export default resolver
