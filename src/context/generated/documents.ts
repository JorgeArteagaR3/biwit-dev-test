/* eslint-disable */
import gql from 'graphql-tag'
export const UserFields = gql`
  fragment UserFields on User {
    id
    name
    email
    image
  }
`
export const ViewerFields = gql`
  fragment ViewerFields on User {
    ...UserFields
  }
  ${UserFields}
`
export const UpdateUser = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        ...UserFields
      }
    }
  }
  ${UserFields}
`
export const GetCurrentUser = gql`
  query GetCurrentUser {
    currentUser {
      user {
        ...ViewerFields
      }
    }
  }
  ${ViewerFields}
`
