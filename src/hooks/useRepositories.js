import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ first, orderBy, orderDirection, searchKeyword }) => {
    const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
        variables: { first, orderBy, orderDirection, searchKeyword },
        fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: { after: data.repositories.pageInfo.endCursor, first, orderBy, orderDirection, searchKeyword },
        });
    };


    const repositories = data ? data.repositories.edges.map(edge => edge.node) : [];
    return { repositories, loading, error, fetchMore: handleFetchMore };
};

export default useRepositories;
