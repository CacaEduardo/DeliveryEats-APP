import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../configs/Colors';

import { useState } from 'react'

export const TextInputField = (props) => {

   const [showPassword, setShowPassword] = useState(false)

   const {
      handleChange,
      type = 'text',
      textStyle,
      label,
      value,
      placeholder,
      secureTextEntry,
      editable = true
   } = props

   return (
      <View>
         {label && value &&
            <Text style={{ ...styles.textInputLabel, color: Colors.primaryText }}>{label}</Text>
         }
         <View style={styles.container}>
            <TextInput
               {...props}
               secureTextEntry={(secureTextEntry && !showPassword)}
               value={value}
               placeholder={placeholder}
               editable={editable}
               onChangeText={(value) => handleChange(props.name, value)}
               style={[styles.textInput, textStyle]}
            />
            {type == 'password' &&
               <TouchableOpacity style={{marginRight: 8}} onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons name={showPassword ? 'eye-sharp' : 'eye-off-sharp'} size={26} color={Colors.primaryText} />
               </TouchableOpacity>}
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   textInputLabel: {
      fontSize: 14,
      marginBottom: 8,
      fontWeight: 'bold',
      marginLeft: 10

   },
   textInput: {
      paddingVertical: 10,
      paddingHorizontal: 25,
      fontSize: 16,
      flex: 1,
      height: 55,
      color: Colors.secondaryText,
   },
   container: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      borderRadius: 25,
      alignItems: 'center',
      paddingRight: 10,
      backgroundColor: Colors.secondary,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 4, 
   }

})