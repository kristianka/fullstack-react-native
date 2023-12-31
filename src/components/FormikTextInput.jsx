import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
    errorText: {
        marginTop: 5,
        color: '#d73a4a',
    },
    container: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
    },
    containerError: {
        borderColor: '#d73a4a',
    },
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    const containerStyle = [
        styles.container,
        showError ? styles.containerError : null,
    ];

    return (
        <>
            <TextInput
                style={containerStyle}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </>
    );
};

export default FormikTextInput;