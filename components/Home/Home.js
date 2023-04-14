import { View, Text } from 'react-native'
import React from 'react'
import './Home.css' 
// import Drawer from '../Drawer/Drawer'

const Home = ({navigation}) => {
  return (
    <View>    
    <section id='homePage'>
    <article>
        <main>
            <div>
             {/* <Drawer/> */}
  <button className='btn1' onClick={()=>{return navigation.navigate('Register')}}>Register</button>
  <button className='btn2' onClick={()=>{return navigation.navigate('Login')}}>Login</button>
  <button className='btn3' onClick={()=>{return navigation.navigate('Display')}}>Dashboard</button>
           </div>
        </main>
    </article>
</section>
</View>
  )
}

export default Home
