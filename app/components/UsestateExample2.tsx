"use client"
import  { useState } from 'react'

const UsestateExample2 = () => {
    const[text,setText]=useState<string>('')

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value);
    }
  return (
    <div className='justify-center  p-6'>
      <h2 className='bg-cyan-800 font-bold text-white p-3 text-center'>Text Input Mirror</h2>
      <input
      className='bg-amber-200 p-1 border border-gray-400 my-2'
       type='text'
       placeholder='Type Something...'
       value={text}
       onChange={handleChange}
      />
      <h3 className='text-cyan-950'>
        Output:{text}
      </h3>
    </div>
  )
}

export default UsestateExample2
