import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/AntDesign'

import Home from './pages/Home'
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={Detail} options={{
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Icon
                                name="shoppingcart"
                                size={25}
                                color="black"
                            />
                        </TouchableOpacity>
                    )
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;