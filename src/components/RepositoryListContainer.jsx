import { FlatList } from "react-native";
import React from "react";
import RepositoryItem from "./RepositoryItem";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node) : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
            keyExtractor={item => item.id}
        />
    );
};

const RepositoryList = ({ repositories }) => {
    // const { repositories } = useRepositories();
    return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;