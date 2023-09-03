import { FlatList, View, StyleSheet, SafeAreaView } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repositories, loading, error } = useRepositories();

    if (loading) {
        console.log("loading")
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }

    console.log(repositories);

    return (
        <SafeAreaView>
            <FlatList
                data={repositories}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <RepositoryItem item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export default RepositoryList;