import { PrismaClient, User } from '@prisma/client'

export type IContext = PrismaClient

const prisma = new PrismaClient()

export type IAuthenticatedContext = {
  user?: User
}

// TODO: this is where the session is created based on the input. Read more about the apollo graph context.
export async function createContext(): Promise<IContext> {
  // req: NextApiRequest,
  // res: NextApiResponse
  return prisma
}
