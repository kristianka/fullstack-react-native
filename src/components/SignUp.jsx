import { StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { Button } from "react-native";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import useCreateUser from "../hooks/useCreateUser";
import { useNavigate } from "react-router-native";

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, "Username must be greater or equal to 5")
        .max(30, "Username must be less or equal to 30")
        .required("Username is required"),
    password: yup
        .string()
        .min(5, "Password must be greater or equal to 5")
        .max(50, "Password must be less or equal to 50")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match!")
        .required("Password confirmation is required"),

});

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 25,
        width: 300
    },
});

const SignUp = () => {
    const [createUser] = useCreateUser();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const handleFormSubmit = async (values) => {
        console.log(values);
        const { username, password } = values;
        try {
            const data = await createUser({ username, password });
            const data2 = await signIn({ username, password });
            console.log("data is ", data);
            console.log("data is ", data2);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => { handleFormSubmit(values) }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput testID="username" key="username" name="username" placeholder="Username" />
                        <FormikTextInput testID="password" key="password" name="password" placeholder="Password" secureTextEntry />
                        <FormikTextInput testID="confirmPassword" key="confirmPassword" name="confirmPassword" placeholder="Confirm password" secureTextEntry />

                        <Button testID="submit" key="submit" onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
};

export default SignUp;