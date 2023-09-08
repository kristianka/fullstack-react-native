import { StyleSheet, View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import { Formik } from 'formik';
import { Button } from 'react-native';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username must be greater or equal to 3')
        .required('Username is required'),
    password: yup
        .string()
        .min(6, 'Password must be greater or equal to 6')
        .required('Password is required'),
});

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 25,
        width: 300
    },
});

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const handleFormSubmit = async (values) => {
        console.log(values);
        const { username, password } = values;
        try {
            const data = await signIn({ username, password });
            console.log("data is ", data);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => { handleFormSubmit(values) }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput testID="username" key="username" name="username" placeholder="Username" />
                        <FormikTextInput testID="password" key="password" name="password" placeholder="Password" secureTextEntry />
                        <Button testID="submit" key="submit" onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
};

export default SignIn;