import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import Text from "./Text";
import useGetUser from "../hooks/useGetUser";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#24292e",
        flexDirection: 'row'
    },
    tab: {
        padding: 16,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
});

const AppBarTab = ({ text, to }) => {
    return (
        <Pressable style={styles.tab}>
            <Link to={to} style={styles.text}>
                <Text style={styles.text}>{text}</Text>
            </Link>
        </Pressable>
    );
};

const AppBar = () => {
    const { data } = useGetUser();

    return (
        <View style={styles.container}>
            <AppBarTab text="Repositories" to="/" />
            {data?.me ?
                <>
                    <AppBarTab text="Create a review" to="/create-review" />
                    <AppBarTab text="Logout" to="/logout" />
                </>
                :
                <>
                    <AppBarTab text="Sign in" to="/signin" />
                    <AppBarTab text="Sign up" to="/signup" />
                </>
            }
        </View>
    );
};

export default AppBar;
