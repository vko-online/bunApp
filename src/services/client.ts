import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import { onError } from '@apollo/client/link/error'
import { store } from 'src/store'
import { createUploadLink } from 'apollo-upload-client'

const uploadLink = createUploadLink({ uri: 'http://localhost:3000/graphql' })

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:3001/graphql',
  lazy: true,
  connectionParams: () => {
    const token = store.getState().auth.token
    return {
      authorization: token != null ? `Bearer ${token}` : null
    }
  }
}))

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors != null) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations?.join(', ') ?? ''}, Path: ${path?.join(', ') ?? ''}`
      )
    )
  }
  if (networkError != null) console.log('[Network error]: ', networkError)
})

const authLink = setContext(async (_, { headers }) => {
  const token = store.getState().auth.token
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token != null ? `Bearer ${token}` : null
    }
  }
})

// const httpLink = new HttpLink({
//   uri: 'http://localhost:3000/graphql',
//   headers: {
//     'Apollo-Require-Preflight': true
//   }
// })

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(uploadLink)
)

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, splitLink]),
  connectToDevTools: true,
  cache: new InMemoryCache()
})
