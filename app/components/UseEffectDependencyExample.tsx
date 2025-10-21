"use client"
import {useState,useEffect} from 'react'

const UseEffectDependencyExample = () => {
   const[count,setCount]= useState(0)
   useEffect(()=>{
    console.log(`useEffect triggered: Count is ${count}`)
   },[count])
  return (
    <div className='justify-center p-6'>
      <h1 className='bg-cyan-700 text-amber-50 font-bold text-center p-3'>useEffect with Dependency</h1>
      <p className='p-2 m-1 '>Count:{count}</p>
      <button onClick={()=> setCount(count+1)}
      className='rounded border border-gray-500 bg-blue-300 text-black m-2 p-3 font-semibold'>
        Increase
      </button>
      <button onClick={()=>setCount(count-1)}
      className='rounded border border-gray-500 bg-red-400 text-black m-2 p-3 font-semibold'>
        Decrease
      </button>
    
    </div>
  )
}

export default UseEffectDependencyExample
