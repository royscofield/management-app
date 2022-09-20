import { View, Text, TouchableOpacity } from 'react-native'
import style from './Signin.module.css'

const Signin = () => {
  return (
    <View style={style.siginContainer}>
        <View style={style.signinHeader}>
            <Text style={[style.signinText,{fontSize:25}]}>Chào mừng trở lại</Text>
            <Text style={[style.signinText,{fontSize:10}]}>Rất vui mừng khi được gặp lại bạn !</Text>
        </View>
        <View style={style.signinFooter}>
            <Text>THÔNG TIN TÀI KHOẢN</Text>
            
            <TouchableOpacity>
                <Text></Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text></Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Signin