import { View, Text, Alert, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import './Display.css'

const Display = ({navigation}) => {
 let [displayData,setDisplayData]=useState(null)
 
 useEffect(()=>{
  AsyncStorage.getItem('Datas')
  .then((res)=>{return JSON.parse(res)})
  .then((data)=>{setDisplayData(data)})
  .catch((err)=>{Alert.alert(err.messege)})
 },[])

  return (
    <View>

    <section id='display'>
      <main>
      <button className='btn1' onClick={()=>{return navigation.navigate('Camera')}}>Camera</button>
           
<table border={1}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Password</th>
        </tr>
        {displayData &&   displayData.map((ele)=>{return    <tr>
          <td>{ele.Name}</td>
          <td>{ele.Email}</td>
          <td>{ele.Number}</td>
          <td>{ele.Password}</td>
        </tr>}) }
      </table>
      </main>
      </section>
    </View>
  )
}

export default Display