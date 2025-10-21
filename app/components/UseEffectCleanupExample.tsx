"use client"
import {useState,useEffect} from 'react'

const UseEffectCleanupExample = () => {
    const[show,setShow]= useState(true)
 function ChildComponent(){
    useEffect(()=>{
        console.log("Child Mounted!");
        return()=>{
            console.log("Child UnMounted!");
        }
    },[])
    return <p className='mt-3'>I am the Child Component </p>;
}
  return (
    <div className='justify-center p-6'>
      <h1 className='bg-amber-950 p-3 font-bold text-center text-white'>useEffect Cleanup Example</h1>
      <button onClick={()=>setShow(!show)}
       className='bg-gray-400 text-black p-2 m-2 rounded'>
        Toggle Component
      </button>
      {show && <ChildComponent />}
    </div>
  )
}

export default UseEffectCleanupExample
