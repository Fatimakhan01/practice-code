"use client"
import {useState} from 'react';

const ShowHidePassword = () => {
    const[showPassword,setShowPassword]=useState(false)
  return (
    <div className='justify-center p-6'>
      <h1 className='bg-gray-500 p-3 font-bold  text-amber-200 text-shadow-amber-100 text-center'>
        Show / Hide Password 
      </h1>
      <input className='border border-gray-400 p-1 rounded m-2'
      type={showPassword ? 'text':'password'}  
      placeholder='Enter your password '
      />
      <button
      onClick={()=>setShowPassword(!showPassword)}
      className='rounded p-1  border border-gray-500'>
      {showPassword ? 'Hide' : 'Show'}

      </button>
      
    </div>
  )
}

export default ShowHidePassword
