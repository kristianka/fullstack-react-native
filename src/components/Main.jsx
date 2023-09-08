import { ScrollView, StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";

import RepositoryList from "./Repositories/RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn/SignIn"
import Logout from "./Logout";
import Repository from "./Repositories/Repository";
import CreateReview from "./Repositories/Reviews/CreateReview";
import SignUp from "./SignUp/SignUp";
import MyReviews from "./Repositories/Reviews/MyReviews";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {

    return (
        <View style={styles.container}>
            <AppBar />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Routes>
                    <Route path="/" element={<RepositoryList />} exact />
                    <Route path="/signin" element={<SignIn />} exact />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/:id" element={<Repository />} />
                    <Route path="/create-review" element={<CreateReview />} />
                    <Route path="/my-reviews" element={<MyReviews />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                </Routes>
            </ScrollView>
        </View>
    );
};

export default Main;