"use client"
import {useEffect} from 'react'

const UseEffectExample = () => {
  useEffect(()=>{
    console.log("Component Mounted!")
  },[]) //Empty array runs once when component loads!! 
        //No array runs on every render !! 
  return (
    <div className=' justify-center p-6'>
      <h1 className='text-black font-bold text-2xl text-center p-6'>Use Effect Example's</h1>
     <h1 className='bg-fuchsia-200 text-fuchsia-600 font-bold text-center p-3 '>useEffect Mount Example</h1>
    <p className='m-4 font-medium text-zinc-900 '>Check your console - Runs once when the page load!</p>
    </div>
  )
}

export default UseEffectExample
