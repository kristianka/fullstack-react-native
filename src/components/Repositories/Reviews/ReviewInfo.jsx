import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "white",
        borderBottomWidth: 10,
        borderColor: "lightgray",
        flexWrap: "wrap",
        flexShrink: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 16,
    },
    textContainer: {
        position: "relative",
        padding: 10,
        width: "50%"
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
    description: {
        marginBottom: 5,
        flex: 1,
        flexWrap: "wrap",
    },
    title: {
        marginBottom: 5,
        fontWeight: "bold",
    },
});


const ReviewInfo = ({ username, text, rating, date, repositoryName }) => {
    return (
        <View testID="reviewInfo" style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.title} fontWeight="bold" fontSize="heading">{repositoryName}</Text>
            <Text style={styles.title} fontWeight="bold" fontSize="heading" >
                {username}
            </Text>
            <Text style={styles.description} fontSize="subheading">{date}</Text>
            <Text style={styles.description} fontSize="subheading">{text}</Text>
        </View>
    );
};

export default ReviewInfo;
