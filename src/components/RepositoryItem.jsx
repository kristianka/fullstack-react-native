import React from "react";
import { View, Image, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryInfo from "./RepositoryInfo";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
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
        flex: 1,
    },
});

const RepositoryItem = (props) => {
    return (
        <View testID="repositoryItem" style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: props.item.ownerAvatarUrl }}
                />
            </View>
            <View style={styles.textContainer}>
                <RepositoryInfo
                    fullName={props.item.fullName}
                    description={props.item.description}
                    language={props.item.language}
                />
                <RepositoryStats
                    stars={props.item.stargazersCount}
                    forks={props.item.forksCount}
                    reviews={props.item.reviewCount}
                    rating={props.item.ratingAverage}
                />
            </View>
        </View>
    );
}

export default RepositoryItem;
