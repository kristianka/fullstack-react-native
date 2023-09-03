import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query getrepos {
        repositories {
        edges {
            node {
                id
                ownerAvatarUrl
                name,
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

export const SIGN_IN = gql`
    mutation ($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
          accessToken
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

// other queries...