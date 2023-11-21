import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Colors from "../../configs/Colors"
import { TabNavigator } from "../layout/TabNavigator"
import { FontAwesome } from '@expo/vector-icons'; 
import { Spacer } from "../atoms/Spacer";


export const User = ({navigation}) => {

    const handleNavigate = (screen) => {
        navigation.navigate(screen)
    }


    return(
        <View style={styles.container}>
            <View style={styles.titleScreenContainer}>
                <Text style={styles.titleScreenText}>Perfil</Text>
            </View>
            <View style = {styles.list}>
                <TouchableOpacity style = {styles.itemList}>
                    <View style = {{width: 35, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome name="heart" size={30} color={Colors.primary} /> 
                    </View>
                    <Spacer size = {1}/>          
                    <View >
                        <Text style = {styles.text}>Favoritos</Text>
                        <Text style = {styles.text2}>Pedidos e Lugares favoritos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.itemList}>
                    <View style = {{width: 35, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome name="user" size={30} color={Colors.primary} /> 
                    </View>
                    <Spacer size = {1}/>          
                    <View>
                        <Text style = {styles.text}>Meus Dados</Text>
                        <Text style = {styles.text2}>Visualizar e editar dados do usuario</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.itemList}>
                    <View style = {{width: 35, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome name="lock" size={30} color={Colors.primary} /> 
                    </View>
                    <Spacer size = {1}/>          
                    <View>
                        <Text style = {styles.text}>Alterar Senha</Text>
                        <Text style = {styles.text2}>Redefiniçao de senha do usuário</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.itemList}>
                    <View style = {{width: 35, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome name="gear" size={30} color={Colors.primary} /> 
                    </View>
                    <Spacer size = {1}/>          
                    <View>
                        <Text style = {styles.text}>Sobre o Aplicavo</Text>
                        <Text style = {styles.text2}>Versão 1.0.0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.itemListOut} onPress = {() => navigation.navigate('Login')}>
                    <View style = {{width: 35, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome name="sign-out" size={30} color={Colors.primary} /> 
                    </View>
                    <Spacer size = {1}/>          
                    <Text style = {styles.text}>Sair</Text>
                </TouchableOpacity>
            </View>
            <TabNavigator handleNavigate={handleNavigate}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    titleScreenContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        height: 60,
        borderBottomColor: Colors.primaryText
    },
    titleScreenText:{
        fontSize: 22,
        color: Colors.primary,
        fontWeight: 'bold'

    },
    itemList: {
        padding: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: Colors.primaryText,
        flexDirection: 'row', alignItems: 'center'
    },
    itemListOut:{
        padding: 22,
        borderBottomWidth: 0.2,
        borderBottomColor: Colors.primaryText,
        flexDirection: 'row', alignItems: 'center'
    },
    list: {
        marginTop: 20
    },
    text: {
        fontSize: 16
    },
    text2: {
        fontSize: 12
    }
  
    
})