import ReviewItem from "./Review";
import useGetUser from "../../../hooks/useGetUser";
import { FlatList } from "react-native";


const MyReviews = () => {
    const { data, refetch } = useGetUser({ includeReviews: true });
    if (!data) return null;

    return (
        <FlatList
            data={data?.me?.reviews?.edges.map(edge => edge.node)}
            renderItem={({ item }) => <ReviewItem key={item.id} review={item} refetch={refetch} />}
            keyExtractor={item => item.id}
        />
    )
}

export default MyReviews;