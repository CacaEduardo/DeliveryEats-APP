import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator } from "react-native"
import Colors from "../../configs/Colors"
import { TextInputField } from "../atoms/TextInputField"
import { Spacer } from "../atoms/Spacer"
import { useState, useContext } from "react"
import { PrimaryButton } from "../atoms/PrimaryButton"
import { TextButton } from "../atoms/TextButton"
import { doLogin } from "../../interface/user/user-interface"
import env from "../../configs/Environment"
import { AuthContext } from "../../configs/Context"

export const Login = ({navigation}) => {

    const { setUser } = useContext(AuthContext)

    const [userData, setUserData] = useState({
        email: env.auth.email,
        password: env.auth.password,
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handlePress = async () => {
        try{
            setLoading(true)
            const login = await doLogin(userData)
            if(login.success){
                setUser(login.user[0])
                navigation.navigate('Dashboard')
            }else{
                alert('Usuário ou senha incorretos')
            }
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false)
        }

    }

    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.form}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../images/logo.png')} style={{width: 250, height: 250}} resizeMode="contain" />
                </View>
                <View style = {styles.valuesContainer}>
                    <TextInputField 
                        type = 'text'
                        name = 'email'
                        value = {userData.email}
                        placeholder = {'e-mail'}
                        handleChange = {(name, value)=>handleChange(name,value)}
                    />
                    <Spacer size = {2}/>
                    <TextInputField 
                        name = 'password'
                        value = {userData.password}
                        secureTextEntry = {true}
                        type = 'password'
                        placeholder = {'senha'}
                        handleChange = {(name, value)=>handleChange(name,value)}
                    />
                    <Spacer size = {2}/>
                    <PrimaryButton
                        handlePress={handlePress}
                        title={'Acessar'}
                    />
                    <Spacer size = {2}/>
                    {loading && 
                        <ActivityIndicator size = {40} color={Colors.primary}/>                
                    }
                    <TextButton title={'Esqueci minha senha'}/> 
                    <Spacer size = {2}/>
                    <TextButton title={'Novo cadastro'} handlePress={()=>navigation.navigate('SignUp')}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingVertical: 40,
        paddingHorizontal: 40,
    },
    form: {
        flex : 1,
        position: 'relative'
    },
    valuesContainer: {
        paddingBottom: 20
    }
})