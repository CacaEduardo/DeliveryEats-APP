import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native"
import Colors from "../../configs/Colors"
import { Spacer } from "../atoms/Spacer"
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from "react"
import { Tab } from "@rneui/themed";
import { CardPedidos } from "../atoms/CardPedidos";
import { CardCourier } from "../atoms/CardCourier";

export const Partner = ({navigation, route}) => {

    const { item } = route.params
    const [index, setIndex] = useState(0)

    return(
        <View style={styles.container}>
            <View style={styles.titleScreenContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <FontAwesome name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Spacer size={4}/>
                <Text style={styles.titleScreenText}>{item?.name}</Text>
            </View>
            <View style={styles.container}>
              <Tab value={index} onChange={(e) => setIndex(e)} dense 
                indicatorStyle={{
                  backgroundColor: Colors.primary,
                  height: 3,
                }}
              >
                <Tab.Item 
                  titleStyle={{ color: Colors.primary}}
                >
                  Produtos
                </Tab.Item>
                <Tab.Item
                  titleStyle={{ color: Colors.primary}}
                >
                  Entregadores
                </Tab.Item>
              </Tab>
              <ScrollView style={styles.scrollview}>
                {index === 0 &&
                  <>
                    {item.products.map((i, index) => (
                        <View key = {`card-pedidos-${index}`}>
                            <CardPedidos key={index.place} item={i} origin = {'search'} noHandle={true}/>
                            <Spacer size={1}/>
                        </View>
                    ))}
                  </>
                }
                {index === 1 &&
                  <>
                    {item.couriers.map((i, index) => (
                        <View key = {`card-courier-${index}`}>
                            <CardCourier item={i} />
                            <Spacer size={1}/>
                        </View>
                    ))}
                  </>
                }
              </ScrollView>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingBottom: 85,
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    titleScreenContainer:{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
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
    scrollview:{
        padding: 10,
    }
})