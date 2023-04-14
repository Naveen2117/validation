
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home';
import Login from '../LoginPage/Login';
import Registration from '../Registration/Registration';
import Display from '../DisplayData/Display';

const Drawer = () => {
    const Drawer=createDrawerNavigator(); 
  return (
    <View>
        <Text>Drawer</Text>
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home}/>
                <Drawer.Screen name='Login' component={Login}/>
                <Drawer.Screen name='Register' component={Registration}/>
                <Drawer.Screen name='Display' component={Display}/>
            </Drawer.Navigator>
        </NavigationContainer>
    </View>
  )
}

export default Drawer