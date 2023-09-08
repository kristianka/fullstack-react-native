import { Button, View } from "react-native";
import Text from "./Text";
import { useNavigate } from "react-router-native";
import useGetUser from "../hooks/useGetUser";

const Logout = () => {
    const { logout } = useGetUser({ includeReviews: false });
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <View>
            <Text>Are you sure you want to logout?</Text>
            <Button title="I am sure" onPress={handleLogout} />
        </View>
    );
}

export default Logout;