import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 40,
        width: '100%',
    },
    inputContainer: {
        marginBottom: 10,
    },
    inputBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 25,
        width: '100%',
    },
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [styles.inputBox, style];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;