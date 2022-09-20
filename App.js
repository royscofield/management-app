import { View, Text, ImageBackground } from "react-native";


import DefaultLayout from "./components/Layout/DefaultLayout";
import style from "./App.module.css";

export default function App() {
    return (
            <View style={style.container}>
                <DefaultLayout />
            </View>
    );
}
