import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login/Login";
import Signin from "../../screens/Login/SignIn/Signin";

const Stack = createNativeStackNavigator();
const DefaultLayout = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Đăng nhập" component={Login} />
                <Stack.Screen name="Đăng ký" component={Signin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default DefaultLayout;
