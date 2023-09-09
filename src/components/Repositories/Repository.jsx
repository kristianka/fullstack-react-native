import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryInfo from "./RepositoryInfo";
import Text from "../Text";
import useRepositoryInfo from "../../hooks/useRepositoryInfo";
import { useParams } from "react-router-native";
import { Button } from "react-native";
import * as Linking from "expo-linking";
import ReviewItem from "./Reviews/Review";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 10,
        backgroundColor: "white",
        flexWrap: "wrap",
        flexShrink: 1,
        width: "20%"
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
        width: "50%",
        padding: 10,
    },
    separator: {
        height: 10,
    },

});

const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
    const { id } = useParams();
    const { repository } = useRepositoryInfo(id)

    if (!repository) {
        return <Text>Loading...</Text>;
    }
    console.log(repository)
    const { url, ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount,
        reviewCount, ratingAverage } = repository;

    const handleClick = () => {
        Linking.openURL(url);
    }

    return (
        <View>
            <View testID="repositoryItem" style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: ownerAvatarUrl }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <RepositoryInfo
                        fullName={fullName}
                        description={description}
                        language={language}
                    />
                    <RepositoryStats
                        stars={stargazersCount}
                        forks={forksCount}
                        reviews={reviewCount}
                        rating={ratingAverage}
                    />
                    <Button title="Open in GitHub" onPress={handleClick}></Button>
                </View>
            </View>
            <View>
                <Text></Text>
            </View>
            <FlatList
                key="reviews"
                ItemSeparatorComponent={ItemSeparator}
                data={repository.reviews.edges}
                renderItem={({ item }) => <ReviewItem review={item.node} />}
                keyExtractor={(item) => item.node.id}
            />
        </View>
    );
}

export default Repository;
