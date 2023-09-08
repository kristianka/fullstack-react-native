import { FlatList, View, StyleSheet, SafeAreaView } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from '../../hooks/useRepositories';
import { useState } from "react";
import { useDebounce } from "use-debounce";
import SearchInput from "../SearchInput";
import FilterRepos from "./FilterRepos";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const [order, setOrder] = useState("CREATED_AT");
    const [orderDirection, setOrderDirection] = useState("DESC");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [debouncedSearchKeyword] = useDebounce(searchKeyword, 1000);

    const { repositories, loading, error } = useRepositories({ orderBy: order, orderDirection, searchKeyword: debouncedSearchKeyword });

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
            <SearchInput value={searchKeyword} onChangeText={setSearchKeyword} />
            <FilterRepos value={`${order}-${orderDirection}`} onChange={changeOrder} />
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