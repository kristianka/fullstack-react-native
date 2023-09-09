import React from "react";
import { View, Alert } from "react-native";
import { Button } from "react-native-paper";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../../hooks/useDeleteReview";

const Buttons = ({ reviewId, repositoryId, refetch }) => {
    const navigate = useNavigate();
    const [deleteReview] = useDeleteReview();
    // replace / with .
    const newId = repositoryId.replace(/\//g, '.');

    const handleDelete = async () => {
        try {
            Alert.alert("Delete review", "Are you sure you want to delete this review?", [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => deleteReview(reviewId),
                    style: "destructive"
                }
            ]);
            refetch();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <Button
                mode="contained"
                onPress={() => navigate(`/${newId}`)}
            >
                View repository
            </Button>

            <Button
                mode="contained"
                onPress={handleDelete}
            >
                Delete review
            </Button>
        </View>
    )
};

export default Buttons;