import ReviewItem from "./Review";
import useGetUser from "../../../hooks/useGetUser";
import { FlatList } from "react-native";

const MyReviews = () => {
    const { data } = useGetUser({ includeReviews: true });
    if (!data) return null;
    console.log("my reviews data", data);

    return (
        <FlatList
            data={data?.me?.reviews?.edges.map(edge => edge.node)}
            renderItem={({ item }) => <ReviewItem key={item.id} review={item} />}
            keyExtractor={item => item.id}
        />
    )
}

export default MyReviews;