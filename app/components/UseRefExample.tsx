"use client"
import {useRef} from 'react'

const UseRefExample = () => {
const inputRef = useRef<HTMLInputElement>(null)
const focusInput =()=>{
    inputRef.current?.focus();
}
  return (
    <div className='text-center p-6'>
      <h1 className='text-2xl text-black font-bold '>UseRef Example</h1>
      <input
      className='border p-2 rounded mb-4'
      placeholder='Type here....'
      />
      <button 
      onClick={focusInput}
      className='border border-amber-500 rounded p-2 ml-3'>
        Focus Input
      </button>
    </div>
  )
}

export default UseRefExample
