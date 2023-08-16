import { mergeDeep } from '@apollo/client/utilities'

import user from './user'

const cominedResolvers = mergeDeep(user)

export default cominedResolvers
