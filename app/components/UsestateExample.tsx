"use client"
import  { useState } from 'react'

interface User  {
  count:number;
};

const UsestateExample = () => {

  const[count,setCount]=useState(0)

  const handleIncrease =()=>{
    if(count<100){
     setCount(count+1);
    }
  }

  const handleDecrease =()=>{
    if (count>0) {
      setCount (count-1);
    }
  }
  return (
    <div  className='justify-center p-6 '>
      <h1 className='text-black font-bold text-2xl text-center p-6'>Use State Example's</h1>
    <h1 className=' text-emerald-900 font-extrabold bg-amber-100 text-center p-3'>Counter Example</h1>
    <p className='text-shadow-md text-emerald-700 font-bold p-2 m-1'>Count:{count}</p>
  
    <button className='p-3 m-2 border border-gray-400 rounded text-cyan-900'
    onClick={handleIncrease}
    >
      Increase
    </button>
    <button className=' p-3 m-3 border border-gray-400 rounded text-cyan-900'
    onClick={handleDecrease}
    >
      Decrease
    </button>
    </div>
  )
}

export default UsestateExample
