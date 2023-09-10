"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function signup() {
    const router=useRouter()
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
        
    
        // console.log(formData)
        try {
            
            const res= await axios.post("/api/signup",formData)
            // console.log(res.data)
            if(res.data.succes){
                router.push("/login")
            }
        } catch (error) {
           console.log(error) 
        }

    }
  return (
    <div>
        <Navbar/>
        <div className=' w-full md:w-9/12 mx-auto h-[60vh]  p-5'>

        
        <div className=' space-y-3'>
            <h1 className='font-semibold text-xl'>Sign up for an account</h1>
            <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.


</p>
        </div>
        <div className='mt-6'>
        <form onSubmit={handleSubmit}>
            <h1>Username</h1>
            <input type="text" className='w-11/12 p-2 border  rounded-md outline-blue-400' onChange={handleChange} placeholder='Username' name='username' value={formData.username} />
            <h1>Password (4 characters minimum)</h1>
            <input type="password" className='w-11/12 p-2 border  rounded-md outline-blue-400'  onChange={handleChange} placeholder='Password' name='password' value={formData.password} />
            <h1>Password Confirm</h1>
            <input type="password" className='w-11/12 p-2 border  rounded-md outline-blue-400'  onChange={handleChange} placeholder='Confirm Password' name='cpassword' value={formData.cpassword}/>
            <h1>Email</h1>
            <input type="email" className='w-11/12 p-2 border  rounded-md outline-blue-400'  onChange={handleChange} placeholder='Email' name='email' value={formData.email} />
            <p className='mt-2'>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
            <div className='flex space-x-3 mt-4' >

            <button className=' bg-[#0CB5DF] rounded-md py-1 px-4 text-white font-semibold hover:bg-black transition-all duration-500'>Sign Up</button>
            <button className='text-[#0CB5DF] underline underline-offset-2'>Cancel</button>
            </div>

        </form>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default signup