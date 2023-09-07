import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query getrepos {
        repositories {
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

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      user {
        username
      }
      repository {
        name
      }
      rating,
      text
    }
}`;

