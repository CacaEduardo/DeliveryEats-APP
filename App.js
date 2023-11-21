import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Colors from './src/configs/Colors';
import { AuthNavigator } from './src/components/auth/AuthNavigator';
import { AuthProvider } from './src/configs/Context';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar 
                backgroundColor={Colors.backgroundColor}
                barStyle="light-content" 
            />
            <AuthProvider>
                <SafeAreaView style = {styles.container}>
                    <AuthNavigator />
                </SafeAreaView>
            </AuthProvider>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: Colors.backgroundColor,
    },
 });
 

