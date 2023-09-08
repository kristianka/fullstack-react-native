import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';


const useCreateUser = () => {
    const [mutate, result] = useMutation(CREATE_USER, {
        onError: (error) => {
            console.log(error);
        },
    });

    const createUser = async ({ username, password }) => {
        console.log('creating user with in with', username, password);
        const { data } = await mutate({ variables: { user: { username, password } } });
        return data;
    };

    return [createUser, result];
};

export default useCreateUser;