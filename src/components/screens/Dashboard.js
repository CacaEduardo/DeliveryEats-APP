import { View, Text, StyleSheet, Image, ScrollView} from "react-native"
import Colors from "../../configs/Colors"
import { TextInputField } from "../atoms/TextInputField"
import { Spacer } from "../atoms/Spacer"
import { useState } from "react"
import { PrimaryButton } from "../atoms/PrimaryButton"
import { TextButton } from "../atoms/TextButton"

export const Dashboard = () => {

    const [user, setUser] = useState({
        email: '',
        senha: ''
    })

    const handleChange = (name, value) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handlePress = () => {
        console.log('cliquei')
    }

    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.form}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../images/logo.png')} />
                </View>
                <View style = {styles.valuesContainer}>
                    <TextInputField 
                        type = 'text'
                        name = 'email'
                        value = {user.email}
                        placeholder = {'e-mail'}
                        handleChange = {(name, value)=>handleChange(name,value)}
                    />
                    <Spacer size = {2}/>
                    <TextInputField 
                        name = 'senha'
                        value = {user.senha}
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
                    <TextButton title={'Esqueci minha senha'}/>
                    <Spacer size = {2}/>
                    <TextButton title={'Novo cadastro'}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingVertical: 50,
        paddingHorizontal: 40,
    },
    form: {
        flex : 1,
    },
    valuesContainer: {
        paddingBottom: 20
    }
})