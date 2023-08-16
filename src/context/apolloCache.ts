import { DataProxy } from '@apollo/client/cache'
import { InMemoryCache } from '@apollo/client'
import introspectionQueryResultData from './generated/fragmentTypes.json'
import { TypedTypePolicies } from './generated/apollo-helpers'

export function initCache() {
  const typePolicies: TypedTypePolicies = {}

  return new InMemoryCache({
    possibleTypes: introspectionQueryResultData.possibleTypes,
    typePolicies
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function safeReadQuery<QueryType, TVariables = any>(
  client: DataProxy,
  options: DataProxy.Query<TVariables, QueryType>,
  defaultValue: Maybe<QueryType> = null
): QueryType | null {
  try {
    return client.readQuery(options)
  } catch (_err) {
    return defaultValue
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function safeReadFragment<FragmentType, TVariables = any>(
  client: DataProxy,
  options: DataProxy.Fragment<TVariables, FragmentType>
): FragmentType | null {
  try {
    return client.readFragment(options)
  } catch (_err) {
    return null
  }
}
