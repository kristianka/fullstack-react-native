import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
      }
    }
`;

export const ME = gql`
    query me {
        me {
            id
            username
          }
    }
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
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
        reviews {
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
          }      
      }
}
`;
