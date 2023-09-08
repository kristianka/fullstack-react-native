import { useApolloClient, useQuery } from "@apollo/client";
import { CURRENT_USER } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";


const useGetUser = ({ includeReviews }) => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const { data, loading, error } = useQuery(CURRENT_USER, {
        variables: { includeReviews: includeReviews },
        fetchPolicy: "cache-and-network",
    });

    const logout = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };

    return { data, loading, error, logout };
};

export default useGetUser;
