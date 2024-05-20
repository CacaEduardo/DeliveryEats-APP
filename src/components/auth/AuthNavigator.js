
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { SignUp } from '../screens/SignUp';
import { Dashboard } from '../screens/Dashboard';
import { Search } from '../screens/Search';
import { Orders } from '../screens/Orders';
import { User } from '../screens/User';
import { Partners } from '../screens/Partners';
import { Partner } from '../screens/Partner';
import Colors from '../../configs/Colors';


const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="SignUp"
                component={SignUp}
                options={{
                    headerTitle: 'Cadastro',
                    headerStyle: {
                      backgroundColor: Colors.backgroundColor,
                    }
                }}
            />
            <Stack.Screen 
                name="Dashboard"
                component={Dashboard}
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name="Search"
                component={Search}
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name="Orders"
                component={Orders}
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name="User"
                component={User}
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name="Partners"
                component={Partners}
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name="Partner"
                component={Partner}
                options= {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}