import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from './useAuthStorage';


const useGetUser = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const { data, loading, error } = useQuery(ME, {
        fetchPolicy: 'cache-and-network',
    });

    const logout = async () => {
        console.log('logging out');
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };

    return { data, loading, error, logout };
};

export default useGetUser;
