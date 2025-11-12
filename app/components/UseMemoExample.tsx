"use client"
import{useState,useMemo}from 'react'

const UseMemoExample = () => {
   const[search,setSearch]= useState('')
   const users=['fatima','Ali','Huma','Rabia','Umer','Tuba','Hasan']

   const filteredUser =useMemo(()=>{
    console.log("Filtering users...")
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users])
  return (
    <div className='text-center p-6'>
      <h1 className='text-2xl text-black font-bold'>UseMemo Example</h1>
      <input
      className='border p-2 mb-4 rounded'
      placeholder='Search user here...'
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      />
      {filteredUser.map((user,index)=>
       <p key={index}>{user}</p>
      )}
    </div>
  )
}

export default UseMemoExample
