"use client"

import React from 'react'
// import { axios } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  return (
    <>
      <main className='justify-center items-center text-center flex flex-col p-3'>

        <div className='text-2xl text-white items-center'>Login Page</div>

        {/* Login Form */}
        <div className='justify-center items-center border rounded-lg flex flex-col w-2/5 mt-5 p-3 font-light'>

          {/* E-Mail Label */}
          <label htmlFor='email' className='text-sm text-gray-500'></label>
          <input
            id='email'
            type='email'
            placeholder='Enter E-Mail ID'
            className='rounded-[50px] py-1 px-2 text-center text-black text-sm m-2'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          {/* Password Label */}
          <label htmlFor='password' className='text-sm text-gray-500'></label>
          <input
            id='password'
            type='text'
            placeholder='Enter Password'
            className='rounded-[50px] py-1 px-2 text-center text-black text-sm m-2'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button className='bg-gray-700 py-1 px-3 text-sm rounded-md m-2'>Submit</button>
          <Link href='/frontend/sign-up'>
          <span className='font-extralight text-sm'>Don't have an account? <b>SignUp Here</b> </span>
          </Link>

        </div>

      </main>

    </>
  )
}

export default LoginPage