import { ApolloClient, InMemoryCache } from '@apollo/client';
import configs from '~/configs';

const apiUri = 'https://api.github.com/graphql';

const client = new ApolloClient({
  uri: apiUri,
  headers: {
    Authorization: `token ${configs.GH_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  },
  cache: new InMemoryCache(),
});

export default client;
