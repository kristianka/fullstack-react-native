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

// other queries...