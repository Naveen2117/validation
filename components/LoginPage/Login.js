import { View, Text, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import './Login.css'
const Login = ({navigation}) => {
let[storedData,setStoredData]=useState(null)
// let[pass,setpass]=useState(null)


useEffect(()=>{
 AsyncStorage.getItem('Datas')
.then((res)=>{return JSON.parse(res)})
.then((data)=>{setStoredData(data.map((e)=>{return e.Email}))})
// .then((data1)=>{setpass(data1.map((e)=>{return e.Password}))})
},[])

console.log(storedData);  

let email=useRef();
// let password=useRef();

let submit=(e)=>{
 e.preventDefault()
 if(email.current.value!=""){
if(storedData.includes(email.current.value)){
 navigation.navigate('Display')     
      alert("valid")
}else{
  alert('Invalid Email')
}}else{
  alert("enter data and Login")
}
}

  return (
    <View>
         <section id='login'>
          <article>
            <main>
              <form>
              <label>Email</label><input type="email" placeholder='Enter Email'  ref={email} required/>
              {/* <label>Password: </label><input type="password" placeholder='Enter Password' ref={password} required/> */}
              <button style={{margin:15,textAlign:"center"}} onClick={submit}>submit</button>
              </form>
           
            </main>
          </article>
         </section>
    </View>
  )
}

export default Login