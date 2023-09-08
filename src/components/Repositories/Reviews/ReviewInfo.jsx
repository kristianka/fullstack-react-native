import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexShrink: 1
    },
    title: {
        marginBottom: 5,
        fontWeight: "bold",
    },
    description: {
        marginBottom: 5,
        flex: 1,
        flexWrap: "wrap",
    },
    ratingContainer: {
        backgroundColor: "#0366d6",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        alignSelf: "flex-start",
    },
    rating: {
        color: "white",
        fontWeight: "bold",
    },
});

const ReviewInfo = ({ username, text, rating, date }) => {
    return (
        <View testID="reviewInfo" style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.title} fontWeight="bold" fontSize="heading" >
                {username}
            </Text>
            <Text style={styles.description} fontWeight="subheading">{date}</Text>
            <Text style={styles.description} fontWeight="subheading">{text}</Text>
        </View>
    );
};

export default ReviewInfo;
