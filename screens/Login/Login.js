import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Signin from "./SignIn/Signin";

import Logo from "../../assets/pingo-craft-logo.png";
import style from "./Login.module.css";

let { height } = Dimensions.get("screen");

let box_count = 2;

const box_height = height / box_count;

const Login = ({ navigation }) => {

    const navigatation = useNavigation()

    return (
        <View style={style.loginContainer}>
            <View style={[style.loginHeader, { height: box_height }]}>
                <Image source={Logo} style={style.imgLogo} />
                <Text style={style.loginText}>
                    Chào mừng đến với Pingo Craft
                </Text>
            </View>

            <View style={[style.loginFooter, { height: box_height }]}>
                <TouchableOpacity
                    style={style.loginInpuSignUptView}
                    // onPress={}
                >
                    <Text style={style.loginSignup}>Đăng ký</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.loginInputSignInView}
                    onPress={() => navigatation.navigate('Đăng ký')}
                >
                    <Text style={style.loginSignin}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
