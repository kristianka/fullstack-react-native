import { StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { Button } from 'react-native';
import * as yup from 'yup';

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

const handleFormSubmit = (values) => {
    console.log(values);
};

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => { handleFormSubmit(values) }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput name="username" placeholder="Username" />
                        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
};

export default SignIn;