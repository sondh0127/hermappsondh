import { NextApiRequest, NextApiResponse } from 'next'
import { auth0 } from '@/utils/initAuth0'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sessionData = await auth0.getSession(req)
    res.send(sessionData?.accessToken)
    res.end()
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
