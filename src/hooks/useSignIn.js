import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/queries';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(SIGN_IN, {
        onError: (error) => {
            console.log(error);
        },
    });

    const signIn = async ({ username, password }) => {
        console.log('signing in with', username, password);
        const { data } = await mutate({ variables: { username, password } });
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        return data;
    };

    return [signIn, result];
};

export default useSignIn;