export default `type User {
  id: ID!
  name: String
  email: String
  image: String
}

type UserResponse {
  user: User!
}

type Query {
  currentUser: UserResponse!
}

input UpdateUserInput {
  id: ID!
  name: String
  email: String
  image: String
}

type Mutation {
  updateUser(input: UpdateUserInput!): UserResponse!
}
`;