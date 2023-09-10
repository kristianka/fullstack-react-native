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
        width: "100%"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 16,
        padding: 10,
    },
    button: {
        marginTop: 10,
        width: "20%",
        padding: 10,
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
    const { data, fetchMore } = useRepositoryInfo({
        first: 3,
        id
    })
    const repository = data ? data.repository : undefined;
    if (!repository) {
        return <Text>Loading...</Text>;
    }

    const { url, ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount,
        reviewCount, ratingAverage } = repository;

    const handleClick = () => {
        Linking.openURL(url);
    }

    const onEndReach = () => {
        fetchMore();
    };

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
                </View>
            </View>
            <View style={styles.button}>
                <Button title="Open in GitHub" onPress={handleClick}></Button>
                <Text></Text>
            </View>
            <FlatList
                key="reviews"
                ItemSeparatorComponent={ItemSeparator}
                data={repository.reviews.edges}
                renderItem={({ item }) => <ReviewItem review={item.node} />}
                keyExtractor={(item) => item.node.id}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
}

export default Repository;
