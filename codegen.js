module.exports = {
  schema: [
    {
      'http://localhost:3100/v1/graphql': {
        headers: {
          Authorization: 'Bearer ' + process.env.AUTH_TOKEN,
        },
      },
    },
  ],
  documents: ['./src/graphql/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
