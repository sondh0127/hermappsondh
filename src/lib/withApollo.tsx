import React from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import withApollo from 'next-with-apollo'
import fetch from 'isomorphic-unfetch'

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: new HttpLink({
        fetch,
        uri: `${process.env.BASE_URL}/api/graphql`,
        credentials: 'same-origin',
      }),
      cache: new InMemoryCache().restore(initialState || {}),
    })
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      )
    },
  }
)
