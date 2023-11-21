import { Feather } from '@expo/vector-icons';
import { Modal, StyleSheet, TouchableOpacity, View, Text, Alert} from "react-native";
import Colors from "../../configs/Colors";
import { ViewDraggable } from "../atoms/ViewDraggable";
import { CardPedidos } from "../atoms/CardPedidos";
import { Spacer } from '../atoms/Spacer';
import { useState } from 'react';
import { createOrder } from '../../interface/order/order-interface';

export const ModalCarrinho = (props) => {
  const {
    showModal = false,
    handleCloseModal = () => { },
    item,
    user_id
  } = props

  const [qtd, setQtd] = useState('1')
  
  const handleQtd = (value) => {
    setQtd(value)
  }

  const handlePedido = async (item) => {
    try{
      const data = {
        user_id: user_id,
        food_id: item.id,
        qtd: qtd
      }
      const create = await createOrder(data)
      if(create){
        Alert.alert('Pedido realizado com sucesso!')
      }

    }catch(error){
      Alert.alert('Ocorreu um erro')
    }finally{
      handleCloseModal()
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <ViewDraggable style={styles.modal} handleClose={handleCloseModal} heightToClose={150}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress = {handleCloseModal}>
                  <Feather name="arrow-left" size={22} color={Colors.secondaryTexty} />
                </TouchableOpacity>
                <Spacer size = {2}/>
                <Text style = {{fontSize: 22, fontWeight: 400, color: Colors.secondaryText}}>Carrinho</Text>
            </View>
            <View style={styles.menu}>
                <View style = {{flexDirection: 'row'}}>
                  <CardPedidos item = {item} backgroundColor = {true} icon = {false} valueQtd = {qtd} handleQtd = {handleQtd}/>
                </View>
                <Spacer size = {3}/>
                <View style = {{flexDirection: 'row'}}>
                  <TouchableOpacity style = {styles.btn} onPress={() => handlePedido(item)}>
                    <Text style = {{color: '#fff', fontSize: 16}}>realizar pedido</Text>
                  </TouchableOpacity>
                  <Spacer size = {2}/>
                  <TouchableOpacity style = {styles.btn2} onPress={handleCloseModal}>
                    <Text style = {{color: '#fff', fontSize: 16}}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </ViewDraggable>
        </View>

      </View>
    </Modal>
  )


}

const styles = StyleSheet.create({
  container: {
    height: 330,
    justifyContent: 'center',
    marginTop: 'auto'
  },
  modal: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: Colors.backgroundColor,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

  },
  menu: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente
  },
  btn:{
    backgroundColor: Colors.success,
    padding: 13,
    borderRadius: 10,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5 
  },
  btn2:{
    backgroundColor: Colors.failure,
    padding: 13,
    borderRadius: 10,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5 
  }

});