"use client"
import React,{useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

function login() {
  const router=useRouter()
  const [formData,setFormData]=useState({
    username:"",
    password:"",

})
function handleChange(e){
  const {name,value}=e.target
  setFormData((prev)=>{
      return{
          ...prev,
          [name]:value
      }
  })
 
}
async function handleSubmit(e){
  e.preventDefault()
  const {name,value}=e.target
  setFormData((prev)=>{
      return{
          ...prev,
          [name]:value
      }
  })
  

  console.log(formData)
  try {
      
      const res= await axios.post("/api/login",formData)
      console.log(res.data)
      if(res.data.success){
          router.push("/")
      }
  } catch (error) {
     console.log(error) 
  }

}
  return (
    <div>
   <form onSubmit={handleSubmit}>
            <h1>Username</h1>
            <input type="text"  onChange={handleChange} placeholder='Username' name='username' value={formData.username} />
            <h1>Password (4 characters minimum)</h1>
            <input type="password" onChange={handleChange} placeholder='Password' name='password' value={formData.password} />  
            <div className='flex space-x-3'>
            <button>Login</button>
            <button>Cancel</button>
            </div>
        </form>

    </div>
  )
}

export default login