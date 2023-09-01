"use client"
import axios from 'axios'
import React, { useState } from 'react'

function signup() {
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        cpassword:"",
        email:""

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
            
            const res= await axios.post("/api/signup",formData)
            console.log(res.data)
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
            <h1>Password Confirm</h1>
            <input type="password" onChange={handleChange} placeholder='Confirm Password' name='cpassword' value={formData.cpassword}/>
            <h1>Email</h1>
            <input type="email" onChange={handleChange} placeholder='Email' name='email' value={formData.email} />
            <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
            <div className='flex space-x-3'>

            <button>Sign Up</button>
            <button>Cancel</button>
            </div>

        </form>
    </div>
  )
}

export default signup