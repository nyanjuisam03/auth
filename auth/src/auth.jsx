import React from 'react'
import { useState } from 'react';


function Auth() {
const [email, setEmail] =useState('');
const [password, setPassword]= useState('')

  return (
    <div className=''>
      <div className='flex flex-col'>
      <h2>Simple Auth</h2>
      <input type="email" 
      className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <input type="password" 
      className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      <button>Sign In</button>
      <span>Or use</span>
      <button>Sign in Google</button>
      
      </div>
    </div>
  )
}

export default Auth
