import { ScrollView, View, Text, StyleSheet } from "react-native"
import Colors from "../../configs/Colors"
import { TabNavigator } from "../layout/TabNavigator"
import { Spacer } from "../atoms/Spacer"
import { CardPartners } from "../atoms/CardPartners"
import { useState, useEffect } from "react"
import { partners } from "../../interface/partners/partners-interface"

export const Partners = ({navigation}) => {


    const handleNavigate = (screen) => {
        navigation.navigate(screen)
    }
    const [data, setData] = useState([])
    
    useEffect(()=>{
        const loadData = async () => {
          try {
            const response = await partners()
            setData(response)
          } catch (error) {
            console.log(error)
          }
        }
          
        loadData()

    },[])


    return(
        <View style={styles.container}>
            <View style={styles.titleScreenContainer}>
                <Text style={styles.titleScreenText}>Restaurantes Parceiros</Text>
            </View>
            <ScrollView style={styles.scrollview}>
              {      
                data.map((item, index) => (
                  <View key = {`card-partners-${index}`}>
                      <CardPartners item={item} handleClick = {()=> navigation.navigate('Partner', {item: item})}/>
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