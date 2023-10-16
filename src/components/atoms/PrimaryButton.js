import {TouchableOpacity, Text, StyleSheet } from "react-native"
import Colors from "../../configs/Colors"

export const PrimaryButton = (props) => {
    
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
    btn: {
        flex: 1,
        height: 55,
        borderRadius: 25,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 4, 

    },
    text: {
        color: Colors.secondary,
        fontSize: 18,
    }
})