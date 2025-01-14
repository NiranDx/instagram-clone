
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';


const GRAPHQL_ENDPOINT = 'https://graphql.anilist.co';

const INITIAL_QUERY = gql`
  query Page($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      users {
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

export function FetchQlUser(page,perPage) {
  const INITIAL_VARIABLES = {
    page,
    perPage,
  };

  const { loading, error, data } = useQuery(INITIAL_QUERY, {
    variables: INITIAL_VARIABLES,
    client,
  });

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return {data: data.Page.users}
}

export default client; 
