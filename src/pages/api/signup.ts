import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { NextApiRequest, NextApiResponse } from 'next'
import gql from 'graphql-tag'
import fetch from 'isomorphic-unfetch'

const createClient = async (req: NextApiRequest) => {
  const cache = new InMemoryCache()
  const link = createHttpLink({
    uri: `${process.env.BASE_URL}/api/graphql`,
    fetch,
    credentials: 'include',
    headers: req.headers,
  })
  const client = new ApolloClient({
    cache,
    link,
  })
  return client
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await createClient(req)

    await client.mutate({
      mutation: gql`
        mutation CheckAndRegisterUser {
          checkAndRegisterUser {
            affected_rows
          }
        }
      `,
    })

    res.writeHead(302, { Location: '/' })
    res.end()
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
