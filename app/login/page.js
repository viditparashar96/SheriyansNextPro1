"use client"
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
// import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { User } from '@/utils/Usercontext'


function login() {
  const router = useRouter()
  const {isLoggedIn,setIsLoggedIn}=useContext(User)
  const [formData, setFormData] = useState({
    username: "",
    password: "",

  })
  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

  }
  async function handleSubmit(e) {
    e.preventDefault()
    const { name, value } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })


    console.log(formData)
    try {

      const res = await axios.post("/api/login", formData)
      console.log(res.data)
      if (res.data.success) {
        setIsLoggedIn(true)
        router.push("/")
        
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div>
      <Navbar />
      <div className=' w-full md:w-9/12 p-4 mt-4 min-h-[60vh]  mx-auto'>
        <div className=' space-y-3'>
          <h1 className='text-2xl font-semibold'>Login to your account</h1>
          <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.</p>
          <p>If you signed up but didn't get your verification email,  <span><Link href="signup" className='text-[#0CB5DF]'>click here</Link></span> to have it resent.


          </p>
        </div>
        <form onSubmit={handleSubmit} className='mt-5'>
          <h1>Username</h1>
          <input className='w-11/12 p-2 border  rounded-md outline-blue-400' type="text" onChange={handleChange} placeholder='Username' name='username' value={formData.username} />
          <h1>Password (4 characters minimum)</h1>
          <input type="password" className='w-11/12 p-2 rounded-md border  outline-blue-400' onChange={handleChange} placeholder='Password' name='password' value={formData.password} />
          <div className='flex  items-center space-x-3 mt-6'>
            <button className=' bg-[#0CB5DF] rounded-md py-1 px-4 text-white font-semibold hover:bg-black transition-all duration-500'>Login</button>
            <Link href="#" className='text-[#0CB5DF] underline underline-offset-2'>Reset password</Link>
          </div>
        </form>

      </div>
      <Footer/>
    </div>
  )
}

export default login