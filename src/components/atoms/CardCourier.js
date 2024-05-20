import { View, Text, StyleSheet, Image } from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 

export const CardCourier = (props) => {

    const {item} = props

    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'center', padding: 10}}>
                <Image source = {require('../../images/logo2.jpg')} style={{width: 100, height: 80, borderRadius: 10}} resizeMode="cover"/>
            </View>
            <View style = {styles.containerLegend}>
                <Text>{item?.name}</Text>
                <Text>{item?.email}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="star" size={18} color="#FF8A00" />
                    <Text style = {{color: "#FF8A00", marginLeft: 5}}>{item?.rating}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        flex: 1

    },
    containerLegend: {
        padding: 10,
        justifyContent: 'center'
    },
    qtd: {
        borderWidth: 0.2, width: 30, borderRadius: 4, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: '#fff',
        padding: 3,

    }
})