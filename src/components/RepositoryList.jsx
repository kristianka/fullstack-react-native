import { FlatList, View, StyleSheet, SafeAreaView } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const [order, setOrder] = useState("CREATED_AT");
    const [orderDirection, setOrderDirection] = useState("DESC");
    const { repositories, loading, error } = useRepositories({ orderBy: order, orderDirection });

    const changeOrder = (value) => {
        const [newOrder, newOrderDirection] = value.split("-");
        setOrder(newOrder);
        setOrderDirection(newOrderDirection);
    };

    if (loading) {
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }

    return (
        <SafeAreaView>
            <Picker
                selectedValue={`${order}-${orderDirection}`}
                onValueChange={(value) => changeOrder(value)}
            >
                <Picker.Item label="Latest repositories" value="CREATED_AT" />
                <Picker.Item label="Highest rated repositories (DESC)" value="RATING_AVERAGE-DESC" />
                <Picker.Item label="Lowest rated repositories (ASC)" value="RATING_AVERAGE-ASC" />
            </Picker>
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