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
      repliedAt
      createdAt
      updatedAt
      user {
        id
        name
        avatar {
          large
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
        avatar {
          large
        }
        bannerImage
        moderatorRoles
      }
      likes {
        name
        avatar {
          large
        }
        isFollowing
        isFollower
      }
      body
      likeCount
      replyCount
      viewCount
      isSubscribed
      replyCommentId
      replyUserId
      userId
      siteUrl
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

  return {data: data?.Page?.threads||[],loading:loading,error:error}
};

export default client; 