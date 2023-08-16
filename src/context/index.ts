import { User } from '@prisma/client'
// import { NextApiRequest, NextApiResponse } from 'next'

export type IContext = {
  testData: string
}

export type IAuthenticatedContext = {
  user?: User
}

// TODO: this is where the session is created based on the input. Read more about the apollo graph context.
export async function createContext(): Promise<IContext> {
  // req: NextApiRequest,
  // res: NextApiResponse
  return {
    testData: 'ds'
  }
}
