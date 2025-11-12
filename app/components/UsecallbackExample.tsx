"use client"
import {useState,useCallback} from 'react';

const UseCallbackExample = () => {
    const[count,setCount]=useState(0)
const handleClick=useCallback(()=>{
    console.log ("Button Clicked!")
    },[])
  return (
    <div className='text-center Justify-center p-6'>
      <h1 className=' text-2xl text-black font-bold '>UseCallback Example</h1>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)} className='border border-amber-500 px-4 py-2 rounded'>+</button>
      <button onClick={handleClick}className='border border-amber-500 px-4 py-2 mt-3 ml-3 rounded'>Click ME!</button>

    </div>
  )
}

export default UseCallbackExample
