import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation ($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
          accessToken
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
}
`;

export const CREATE_USER = gql`
    mutation ($user: CreateUserInput!) {
        createUser(user: $user) {
            id,
            username,
            createdAt
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation ($id: ID!) {
        deleteReview(id: $id)
    }
`;