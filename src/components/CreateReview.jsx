import { StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { Button } from 'react-native';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    name: yup
        .string()
        .required('Name is required'),
    rating: yup
        .number()
        .min(0)
        .max(100)
        .required('Rating is required and must be between 0 and 100'),
    review: yup
        .string()
});

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 25,
        width: 300
    },
});

const CreateReview = () => {
    const [postReview] = useCreateReview();
    const navigate = useNavigate();

    const handleFormSubmit = async (values) => {
        try {
            const data = await postReview(values);
            console.log("data is ", data);
            navigate(`/${data.createReview.user.username}.${data.createReview.repository.name}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', name: '', rating: '', review: '' }}
                onSubmit={handleFormSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput testID="username" key="username" name="username" placeholder="Repository creator's username" />
                        <FormikTextInput testID="name" key="name" name="name" placeholder="Repository's name" />
                        <FormikTextInput testID="rating" key="rating" name="rating" placeholder="Rating" />
                        <FormikTextInput testID="review" key="review" name="review" placeholder="Review (not required)" />
                        <Button testID="submit" key="submit" onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
};

export default CreateReview;