import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepositoryInfo = (variables) => {
    const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
        variables: { ...variables },
        fetchPolicy: "cache-and-network",
        onError: (error) => {
            console.log('error', error);
        }
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: { after: data?.repository.reviews.pageInfo.endCursor, ...variables },
        });
    };


    return { data, loading, error, fetchMore: handleFetchMore };
};

export default useRepositoryInfo;
