import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
    const { data, loading, error } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy, orderDirection },
        fetchPolicy: 'cache-and-network',
    });

    const repositories = data ? data.repositories.edges.map(edge => edge.node) : [];
    return { repositories, loading, error };
};

export default useRepositories;
