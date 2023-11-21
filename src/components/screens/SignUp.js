import { View, StyleSheet, Image, ScrollView } from "react-native"
import Colors from "../../configs/Colors"
import { TextInputField } from "../atoms/TextInputField"
import { Spacer } from "../atoms/Spacer"
import { useState } from "react"
import { PrimaryButton } from "../atoms/PrimaryButton"
import { createUser } from "../../interface/user/user-interface"

export const SignUp = ({navigation}) => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
    })

    const handleChange = (name, value) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleCreate = async () => {
        try{

            const response = await createUser(user)

            if(response){
                alert('Usuário criado com sucesso!')
                navigation.navigate('Login')
            }else{
                alert('Ocorreu um erro ao tentar criar o usuario')
            }
        }catch(error){
            console.log(error);
        }

    }

    return(
        <ScrollView style = {styles.container}>
            <View style = {styles.form}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../images/logo.png')} style={{width: 150, height: 150}} resizeMode="contain" />
                </View>
                <View style = {styles.valuesContainer}>
                    <TextInputField
                        type = 'text'
                        name = 'name'
                        value = {user.name}
                        placeholder = {'Nome Completo'}
                        handleChange = {(name, value)=>handleChange(name,value)}
                    />
                    <Spacer size = {2}/>
                    <TextInputField 
                        type = 'text'
                        name = 'email'
                        value = {user.email}
                        placeholder = {'e-mail'}
                        handleChange = {(name, value)=>handleChange(name,value)}
                    />
                    <Spacer size = {2}/>
                    <TextInputField 
                        name = 'password'
                        value = {user.password}
                        secureTextEntry = {true}
                        type = 'password'
                        placeholder = {'senha'}
                        handleChange = {(name, value)=>handleChange(name,value)}
                    />
                    <Spacer size = {2}/>
                    <PrimaryButton
                        handlePress={handleCreate}
                        title={'Salvar'}
                    />
                    <Spacer size = {2}/>
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
    },
    valuesContainer: {
        paddingBottom: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primaryText
    }
})