import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
    countContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexShrink: 1,
        width: "50%"
    },
});

const formatCount = (count) => {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
};

const RepositoryStats = (props) => {
    const { stars, forks, reviews, rating } = props;
    return (
        <View testID="repositoryStats" style={styles.countContainer}>
            <View>
                <Text fontWeight="bold">{formatCount(stars)}</Text>
                <Text>Stars</Text>
            </View>
            <View>
                <Text fontWeight="bold">{formatCount(forks)}</Text>
                <Text>Forks</Text>
            </View>
            <View>
                <Text fontWeight="bold">{formatCount(reviews)}</Text>
                <Text>Reviews</Text>
            </View>
            <View>
                <Text fontWeight="bold">{rating}</Text>
                <Text>Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryStats;
