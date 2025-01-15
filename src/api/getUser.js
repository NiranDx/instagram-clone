import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://graphql.anilist.co';

const INITIAL_QUERY = gql`
  query Page($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      users(search: $search) {
        id
        name
        avatar {
          large
        }
        isFollowing
        isFollower
        createdAt
        updatedAt
      }
    }
  }
`;

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export const GetUserData = (page = 1, perPage = 20, search = null) => {
  const INITIAL_VARIABLES = {
    page,
    perPage,
    search,
  };

  const { loading, error, data } = useQuery(INITIAL_QUERY, {
    variables: INITIAL_VARIABLES,
    client,
  });

  return {
    data: data?.Page?.users, 
    loading,
    error,
  };
}

export default client;
