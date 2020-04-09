import { NextApiRequest, NextApiResponse } from 'next'
import { auth0 } from '@/utils/initAuth0'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/api/signup' })
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
