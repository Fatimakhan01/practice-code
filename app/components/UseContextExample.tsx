"use client"
import React, { createContext, useContext } from 'react'


const Mycontext=createContext('Guest')

function Navbar() {
    const user=useContext(Mycontext)
    return(
    <div className='justify-center p-6'>
        <h2 className='bg-amber-200 text-gray-500 font-bold'>Navbar</h2>
        <p>welcome {user}!</p>
    </div>
        )}
 function Profile(){
    const user=useContext(Mycontext)
    return(
        <div className='justify-center p-6'>
            <h2 className='bg-amber-200 text-gray-500 font-bold'>Profile Section</h2>
            <p>UserName:{user}</p>
        </div>
    )
 }

const UseContextExample = () => {
  return (
    <Mycontext.Provider value="Fatima">
      <div className='p-2'>
        <Navbar/>
        <Profile/>
      </div>
    </Mycontext.Provider>
  )
}

export default UseContextExample
