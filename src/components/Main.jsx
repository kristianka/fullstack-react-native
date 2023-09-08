import { ScrollView, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import Logout from './Logout';
import Repository from './Repository';
import CreateReview from './CreateReview';
import SignUp from './SignUp';

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
                    <Route path="/signup" element={<SignUp />}></Route>
                </Routes>
            </ScrollView>
        </View>
    );
};

export default Main;