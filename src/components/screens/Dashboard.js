import { ScrollView, View, Text, StyleSheet, Alert, ActivityIndicator} from "react-native"
import Colors from "../../configs/Colors"
import { TabNavigator } from "../layout/TabNavigator"
import { CardPedidos } from "../atoms/CardPedidos"
import { Spacer } from "../atoms/Spacer"
import { favoriteFood } from "../../interface/food/food-interface"
import { useEffect, useState } from "react"

export const Dashboard = ({navigation}) => {
    
    const handleNavigate = (screen) => {
        navigation.navigate(screen)
    }

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        
        const loadFavorites = async () => {
            try{
                setLoading(true)
                const favorites = await favoriteFood()
                setData(favorites)

            }catch (error){
                Alert.alert('Ocorreu um erro ao carregar os favoritos')
            }finally{
                setLoading(false)
            }
        }

        loadFavorites()

    },[])

    return(
        <View style={styles.container}>
            <View style={styles.titleScreenContainer}>
                <Text style={styles.titleScreenText}>Destaques</Text>
            </View>
            {loading &&
                <ActivityIndicator size = 'large' color={Colors.primary}/>                
            }
            <ScrollView style={styles.scrollview}>
                {data?.length > 0 &&
                    data.map((item, index) => (
                        <View key = {`card-pedidos-${index}`}>
                            <CardPedidos item={item}/>
                            <Spacer size={1}/>
                        </View>
                ))}
            </ScrollView>
            <TabNavigator handleNavigate={handleNavigate}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    titleScreenContainer:{
        // flex: 1,
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