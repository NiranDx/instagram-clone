import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://graphql.anilist.co'; 

const INITIAL_QUERY = gql`
  query Page($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      threads {
        id
        title
        isLiked
        likeCount
        repliedAt
        createdAt
        updatedAt
        user {
          id
          name
          avatar {
            large
            medium
          }
          bannerImage
          isFollowing
          isFollower
          isBlocked
          createdAt
          updatedAt
        }
        replyUser {
          id
          name
          about
          avatar {
            large
            medium
          }
        }
        body
        categories {
          id
          name
        }
      }
    }
  }
`;

const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
});
export function FetchFeedsData(page, perPage) {
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

  return {data: data.Page.threads}
};

export default client; 