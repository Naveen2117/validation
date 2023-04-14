// import 'react-native-gestue-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/LoginPage/Login';
import Display from './Components/DisplayData/Display';
import Registration from './Components/Registration/Registration';
import Camera from './Components/Camera/Camera';
// import Drawer from './Components/Drawer/Drawer';



export default function App() {

let stack=createNativeStackNavigator()
  return (
    <View style={styles.container}>
      <Text>Yoo Happy!</Text>   
      {/* <Drawer/>      */}
<NavigationContainer>
  <stack.Navigator initialRouteName='Home'>
    <stack.Screen name='Home' component={Home}/>
    <stack.Screen name='Login' component={Login}/>
    <stack.Screen name='Register' component={Registration}/>
    <stack.Screen name='Display' component={Display}/>
    <stack.Screen name='Camera' component={Camera}/>

  </stack.Navigator>
</NavigationContainer>
      <StatusBar style="auto" />
     
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
