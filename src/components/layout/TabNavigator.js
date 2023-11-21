
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import Colors from "../../configs/Colors"
import { FontAwesome } from '@expo/vector-icons'; 


export const TabNavigator = ({handleNavigate}) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity style={styles.columnFlex} onPress={() => handleNavigate('Dashboard')}>
                <FontAwesome name="home" size={28} color={Colors.primary} />
                <Text style={styles.titleMenu}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.columnFlex} onPress={() => handleNavigate('Search')}>
                <FontAwesome name="search" size={28} color={Colors.primary} />
                <Text style={styles.titleMenu}>Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.columnFlex} onPress={() => handleNavigate('Orders')}>
                <FontAwesome name="list" size={28} color={Colors.primary} />
                <Text style={styles.titleMenu}>Pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.columnFlex} onPress={() => handleNavigate('User')}>
                <FontAwesome name="user" size={28} color={Colors.primary} />
                <Text style={styles.titleMenu}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 80,
        bottom: 0,
        position: 'absolute',
        borderTopWidth: 0.2,
        backgroundColor: Colors.backgroundColor,
        borderColor: Colors.primaryText,

    },
    columnFlex:{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleMenu:{
        marginTop: 2,
        fontSize: 12,
        color: Colors.primary
        
    }
})