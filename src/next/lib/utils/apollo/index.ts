import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
  }),
  ssrMode: true,
  cache: new InMemoryCache(),
});

export default client;
