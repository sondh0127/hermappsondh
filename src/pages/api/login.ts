import { NextApiRequest, NextApiResponse } from 'next'
import { auth0 } from '@/utils/initAuth0'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // res.status(200).json({ name: 'John Doe' })
  try {
    await auth0.handleLogin(req, res)
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
