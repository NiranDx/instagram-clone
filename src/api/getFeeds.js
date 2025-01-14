import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

const GRAPHQL_ENDPOINT = 'https://graphql.anilist.co';

const INITIAL_QUERY = gql`
  query Page($page: Int, $perPage: Int, $search: String) {
  Page(page: $page, perPage: $perPage) {
    threads(search: $search) {
      id
      isLiked
      likeCount
      body
      viewCount
      userId
      user {
        avatar {
          large
        }
        id
        isFollower
        isFollowing
        name
        bannerImage
      }
      title
      replyCount
      replyUser {
        avatar {
          large
        }
        id
        isFollowing
        isFollower
        name
      }
      replyCommentId
      createdAt
      repliedAt
    }
  }
}`;

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
export function FetchFeedsData(page = 1, perPage = 20, search = null) {
  const INITIAL_VARIABLES = {
    page,
    perPage,
    search
  };

  const { loading, error, data } = useQuery(INITIAL_QUERY, {
    variables: INITIAL_VARIABLES,
    client,
  });

  return { data: data?.Page?.threads || [], loading: loading, error: error }
};

export default client; 