import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import './Registration.css'
const Registration = () => {
  let uname=useRef()
  let email=useRef()
  let number=useRef()
  let pass=useRef()
  let [oldData,setOldData]=useState([])

    let addData= (e)=>{
        e.preventDefault()    
          let data={
            Name:uname.current.value,
            Email:email.current.value,
            Number:number.current.value,
            Password:pass.current.value,
          }
             // Retrieve the existing array from AsyncStorage
         if(oldData!=[]){
          AsyncStorage.getItem('Datas')
          .then((res)=>{return JSON.parse(res)})
          .then((data)=>{setOldData(data)})
         }else{
          AsyncStorage.setItem('Datas', JSON.stringify(data));
         }
        
    // Modify the array by creating a new array that includes the existing data and new data
      oldData.push(data);

     // Save the modified array back to AsyncStorage      
      AsyncStorage.setItem('Datas', JSON.stringify(oldData));
      
        }
       
      
  return (
    <section id='register'>
      <article>
        <main>
         <form>
              <label>Name </label><input type="text" ref={uname} placeholder='Enter Name' required/> <br/>
              <label>Email</label><input type="email" ref={email} placeholder='Enter Email' required/><br/>
              <label>Mobile No.</label><input min="10" max='10' type="phone" maxLength={'10'} ref={number} placeholder='Enter Mobile Number' required/><br/>
              <label>Password</label><input type="password" placeholder='Enter Password' ref={pass} required/><br/>
              <button onClick={addData}>submit</button><br/>
              <h5>double tap on submit to submit and leave the page</h5>
              </form>
            
       </main>
      </article>
    </section>
  )
}



export default Registration