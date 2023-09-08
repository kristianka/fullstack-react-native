import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
    },
});

const FilterRepos = ({ value, onChange }) => {
    return (
        <Picker
            style={styles.input}
            selectedValue={value}
            onValueChange={(value) => onChange(value)}
        >
            <Picker.Item label="Latest repositories" value="CREATED_AT" />
            <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE-DESC" />
            <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE-ASC" />
        </Picker>
    )
}

export default FilterRepos;