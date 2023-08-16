import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy
} from '@apollo/client/cache'
export type MutationKeySpecifier = ('updateUser' | MutationKeySpecifier)[]
export type MutationFieldPolicy = {
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>
}
export type QueryKeySpecifier = ('currentUser' | QueryKeySpecifier)[]
export type QueryFieldPolicy = {
  currentUser?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UserKeySpecifier = (
  | 'email'
  | 'id'
  | 'image'
  | 'name'
  | UserKeySpecifier
)[]
export type UserFieldPolicy = {
  email?: FieldPolicy<any> | FieldReadFunction<any>
  id?: FieldPolicy<any> | FieldReadFunction<any>
  image?: FieldPolicy<any> | FieldReadFunction<any>
  name?: FieldPolicy<any> | FieldReadFunction<any>
}
export type UserResponseKeySpecifier = ('user' | UserResponseKeySpecifier)[]
export type UserResponseFieldPolicy = {
  user?: FieldPolicy<any> | FieldReadFunction<any>
}
export type StrictTypedTypePolicies = {
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier)
    fields?: MutationFieldPolicy
  }
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier)
    fields?: QueryFieldPolicy
  }
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier)
    fields?: UserFieldPolicy
  }
  UserResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserResponseKeySpecifier
      | (() => undefined | UserResponseKeySpecifier)
    fields?: UserResponseFieldPolicy
  }
}
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies
