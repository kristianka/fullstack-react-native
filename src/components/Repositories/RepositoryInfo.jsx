import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexShrink: 1
    },
    title: {
        marginBottom: 5,
        fontWeight: "bold",
    },
    description: {
        marginBottom: 5,
        flex: 1,
        flexWrap: "wrap",
    },
    languageContainer: {
        backgroundColor: "#0366d6",
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 7,
        alignSelf: "flex-start",
    },
    languageText: {
        color: "white",
        fontWeight: "bold",
    },
});

const RepositoryInfo = ({ fullName, description, language }) => {
    return (
        <View testID="repositoryInfo" style={styles.container}>
            <Text style={styles.title} fontWeight="bold" fontSize="heading" >
                {fullName}
            </Text>
            <Text style={styles.description} fontWeight="subheading">{description}</Text>
            <View style={styles.languageContainer}>
                <Text style={styles.languageText}>{language}</Text>
            </View>
        </View>
    );
};

export default RepositoryInfo;
