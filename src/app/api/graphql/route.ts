import { createContext } from '@/context'
import { apolloServer } from '@/server/index'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: createContext
})

export const GET = handler
export const POST = handler
export const runtime = 'nodejs'
