import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
    },
});

const SearchInput = ({ value, onChangeText }) => (
    <TextInput
        key="searchInput"
        style={styles.input}
        placeholder="Search repositories"
        value={value}
        onChangeText={onChangeText}
    />
);

export default SearchInput;
