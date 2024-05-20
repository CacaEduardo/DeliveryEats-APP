import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput} from "react-native"
import Colors from "../../configs/Colors"
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Spacer } from "./Spacer";
import { useState } from "react";


export const CardPedidos = (props) => {


    const {item, handlePress = () => {}, origin = 'home', backgroundColor = false, icon = true, valueQtd = '1', handleQtd, noHandle = false } = props


    return(
        <View style={[styles.container, backgroundColor ? {
            backgroundColor: "#fff", padding: 10, borderRadius: 20, shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 5 } : null]}>
            <View style={{justifyContent: 'center', padding: 10}}>
                <Image source = {require('../../images/comida.jpg')} style={{width: 100, height: 80, borderRadius: 10}} resizeMode="cover"/>
            </View>
            <View style = {styles.containerLegend}>
                <Text>{item?.item}</Text>
                <Text>{item?.place}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text>{item?.delivery_time}</Text>
                    <Text style = {{ marginLeft: 5}}> - R$ {item?.delivery}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome name="star" size={18} color="#FF8A00" />
                    <Text style = {{color: "#FF8A00", marginLeft: 5}}>{item?.rating}</Text>
                </View>
            </View>
            {!noHandle &&
            <>
                {icon ? (
                    <View style={{padding: 10, justifyContent: 'center', marginLeft: 'auto'}}>
                        {origin == 'home' ? (
                            <FontAwesome name="heart-o" size={35} color={Colors.primary} />            

                        ): (
                            <TouchableOpacity 
                            onPress = {handlePress}
                            style = {{width: 30, height: 30, padding: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: Colors.secondary}}>
                                <FontAwesome name="plus" size={20} color={Colors.primary} />            
                            </TouchableOpacity>
                        )
                        }
                    </View>
                ) : (
                    <View style = {{padding: 10, justifyContent: 'center', marginLeft: 'auto', alignItems: 'center'}}>
                        <Text>qtd</Text>
                        <TextInput 
                            style = {styles.qtd}
                            value = {valueQtd}
                            onChangeText={(value) => handleQtd(value)}
                            keyboardType="decimal-pad"
                        />
                    </View>
                )
                }
            </>
            }
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