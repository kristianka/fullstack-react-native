import React from "react";
import { View, StyleSheet, } from "react-native";
import { formatDate } from "../../../utils/formatDate";
import ReviewInfo from "./ReviewInfo";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 10,
        backgroundColor: "white",
        flexWrap: "wrap",
        flexShrink: 1,
        width: "5em",
    },
    textContainer: {
        position: "relative",
        flex: 1,
        width: "50%",
        textOverflow: "ellipsis",
    },
    separator: {
        height: 10,
    }
});


const ReviewItem = ({ review, refetch }) => {
    if (!review) return null;
    return (
        <View testID="repositoryItem" style={styles.container}>
            <View>
                <ReviewInfo
                    repositoryName={review?.repository?.fullName}
                    username={review?.user?.username}
                    date={formatDate(review.createdAt)}
                    text={review?.text}
                    rating={review.rating}
                    reviewId={review.id}
                    refetch={refetch}
                />
            </View>
        </View>
    )
};

export default ReviewItem;