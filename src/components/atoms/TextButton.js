import {TouchableOpacity, Text, StyleSheet } from "react-native"
import Colors from "../../configs/Colors"

export const TextButton = (props) => {
    
    const {
        title,
        handlePress = () => {}
    } = props

    return(
        <TouchableOpacity 
        style={styles.btn}
        onPress={handlePress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.primaryText,
        fontSize: 18,
    }
})