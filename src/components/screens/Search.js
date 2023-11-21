import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from "react-native"
import Colors from "../../configs/Colors"
import { TabNavigator } from "../layout/TabNavigator"
import { Spacer } from "../atoms/Spacer"
import { TextInputField } from "../atoms/TextInputField"
import { useState, useEffect, useContext} from "react"
import { CardPedidos } from "../atoms/CardPedidos"
import { ModalCarrinho } from "../layout/ModalCarrinho"
import { food } from "../../interface/food/food-interface"
import { AuthContext } from "../../configs/Context"

export const Search = ({navigation}) => {

    const {user} = useContext(AuthContext)

    const handleNavigate = (screen) => {
        navigation.navigate(screen)
    }
    
    const [search, setSearch] = useState()
    const [showModal, setShowModal] = useState(false)
    const [item, setItem] = useState({})
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        
        const loadFavorites = async () => {
            try{
                setLoading(true)
                const foodData = await food()
                setData(foodData)

            }catch (error){
                Alert.alert('Ocorreu um erro')
            }finally{
                setLoading(false)
            }
        }

        loadFavorites()

    },[])

    useEffect(()=>{
        if(data.length > 0){
            setFilteredData(data)
        }
    }, [data])

    const [filteredData, setFilteredData] = useState({})


    const handleChange  = (name, value) => {
        setSearch(value)
        const filtered = data.filter(item => item.item.toLowerCase().includes(value.toLowerCase()))
        setFilteredData(value === '' ? data : filtered)
    }

    const handlePress = (item) => {
        setShowModal(true)
        setItem(item)
    }

    return(
        <View style={styles.container}>
            <View style={styles.titleScreenContainer}>
                <Text style={styles.titleScreenText}>Buscar</Text>
            </View>
            {showModal &&
                <ModalCarrinho
                    item = {item}
                    user_id = {user.id}
                    showModal = {showModal}
                    handleCloseModal = {()=>setShowModal(false)}
                />
            }
            <View style={styles.view}>
                <Spacer size = {1}/>
                <TextInputField
                            type = 'text'
                            name = 'search'
                            value = {search}
                            placeholder = {'Buscar'}
                            handleChange = {(name, value)=>handleChange(name,value)}
                />
                <ScrollView style={styles.scrollview}>
                    {filteredData?.length > 0 &&
                    filteredData.map((item, index) => (
                        <View key = {`card-pedidos-${index}`}>
                            <CardPedidos key={item.place} item={item} handlePress = {() => handlePress(item)} origin = {'search'}/>
                            <Spacer size={1}/>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <TabNavigator handleNavigate={handleNavigate}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingBottom: 50,
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
    view:{
        padding: 10,
    },

})