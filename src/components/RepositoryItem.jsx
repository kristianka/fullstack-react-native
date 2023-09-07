import React, { useState } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryInfo from "./RepositoryInfo";
import { useNavigate } from "react-router-native";
import Text from "./Text";

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
        padding: 10,
        width: "50%"
    },
});

const RepositoryItem = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const { id, ownerAvatarUrl, fullName, description, language, stargazersCount, forksCount,
        reviewCount, ratingAverage } = props.item;

    const handlePress = () => {
        setShow(!show);
        navigate(`/${id}`)
    };

    return (
        <Pressable onPress={handlePress}>
            {show ? <Text>Hello</Text> :
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
                </View>}

        </Pressable>
    );
}

export default RepositoryItem;
