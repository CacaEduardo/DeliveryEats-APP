import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"
import { FontAwesome } from '@expo/vector-icons'; 
import { Spacer } from "./Spacer";
import Colors from "../../configs/Colors";

export const CardOrders = (props) => {

    const { item } = props

    return(
        <TouchableOpacity style={styles.container}>
            <View style = {styles.containerLegend}>
                <View style = {{flexDirection: 'row'}}>
                    <Image source = {require('../../images/comida.jpg')} style={{width: 80, height: 60, borderRadius: 10}} resizeMode="cover"/>
                    <Spacer size = {2}/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>{item?.place}</Text>
                        <Spacer size = {1}/>
                        <FontAwesome name="star" size={18} color="#FF8A00" />
                        <Text style = {{color: Colors.secondaryText, marginLeft: 5}}>{item?.rating}</Text>
                    </View>
                </View>
                <Spacer size = {1}/>
                <View style = {{flexDirection: 'row'}}>
                    <Text>{item?.amount} x </Text>
                    <Text>{item?.item}</Text>
                    <Spacer size = {1}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text>Previsão - {item?.delivery_time} min</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: Colors.secondary,
        borderRadius: 25,
        padding: 15

    },
    containerLegend: {
        padding: 10,
        justifyContent: 'center'
    },

})