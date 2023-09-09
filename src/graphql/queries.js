import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepos($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
          node {
              id
              ownerAvatarUrl
              name,
              fullName,
              description,
              language,
              stargazersCount
              forksCount,
              reviewCount,
              ratingAverage
            }
      } 
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }      
  }
}
`;

export const CURRENT_USER = gql`
    query currentUser($includeReviews: Boolean = false) {
      me {
        id,
        username,
        reviews @include(if: $includeReviews) {
          edges {
            node {
              id,
              createdAt,
              rating,
              text
              repository {
                id,
                fullName,
                ownerName
              }
            }
          }
        }
      }
   }
`;

export const GET_REPOSITORY = gql`
query repository($first: Int, $after: String, $id: ID!) {
  repository(id: $id) {
    id
    ownerAvatarUrl
    name,
    description,
    language,
    stargazersCount
    forksCount,
    reviewCount,
    ratingAverage,
    url,
    fullName,
    reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }   
      }      
  }
}
`;
