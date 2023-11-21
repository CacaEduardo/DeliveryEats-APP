import { TouchableOpacity, StyleSheet } from "react-native"

export const MenuItem = ({children, onPress = () => {}}) => {
    return(
        <TouchableOpacity style = {styles.container} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})