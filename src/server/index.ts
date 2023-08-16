import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer } from '@apollo/server'

import typeDefs from '@/context/generated/types'
import resolvers from '@/server/resolvers'

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
  resolverValidationOptions: {
    requireResolversForAllFields: 'warn'
  }
})

export const apolloServer = new ApolloServer({
  schema,

  formatError: err => {
    console.warn(JSON.stringify(err, undefined, 2))

    return err
  }
})
