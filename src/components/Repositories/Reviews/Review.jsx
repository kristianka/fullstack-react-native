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
        width: "30em",
    },
    textContainer: {
        position: "relative",
        flex: 1,
    },
    separator: {
        height: 10,
    }
});

const ReviewItem = ({ review }) => {
    if (!review) return null;
    return (
        <View testID="repositoryItem" style={styles.container}>
            <View style={styles.textContainer}>
                <ReviewInfo
                    username={review.user.username}
                    date={formatDate(review.createdAt)}
                    text={review.text}
                    rating={review.rating}
                />
            </View>
        </View>
    )
};

export default ReviewItem;