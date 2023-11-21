import { ScrollView, View, Text, StyleSheet, Alert} from "react-native"
import Colors from "../../configs/Colors"
import { TabNavigator } from "../layout/TabNavigator"
import { CardOrders } from "../atoms/CardOrders"
import { Spacer } from "../atoms/Spacer"
import { orders } from "../../interface/order/order-interface"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../configs/Context"

export const Orders = ({navigation}) => {

    const {user} = useContext(AuthContext)

    const handleNavigate = (screen) => {
        navigation.navigate(screen)
    }
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const loadOrders = async () => {
            try{
                setLoading(true)
                const ordersData = await orders(user.id)
                if(ordersData){
                    setData(ordersData)
                }

            }catch(error){
                Alert.alert('Ocorreu um erro')
            }finally{
                setLoading(false)
            }
            
        }

        loadOrders()

    },[])


    return(
        <View style={styles.container}>
            <View style={styles.titleScreenContainer}>
                <Text style={styles.titleScreenText}>Pedidos</Text>
            </View>
            <ScrollView style={styles.scrollview}>
                {data.length > 0 ?  (
                    data.map((item, index) => (
                        <View key = {`card-pedidos-${index}`}>
                            <CardOrders item={item}/>
                            <Spacer size={1}/>
                        </View>
                    ))
                ) : (
                    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Não há pedidos realizados</Text>
                    </View>
                )
                }
            </ScrollView>
            <TabNavigator handleNavigate={handleNavigate}/>
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