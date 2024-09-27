"use client"

import React, { useEffect } from 'react'
// import { axios } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignupPage = () => {

  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSignup = async () => {

  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  

  return (
    <>
      <main className='justify-center items-center text-center flex flex-col p-3'>

        <div className='text-2xl text-white items-center'>Signup Page</div>

        {/* Sign-Up Form */}
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

          {/* Username Label */}
          <label htmlFor='username' className='text-sm text-gray-500'></label>
          <input
            id='username'
            type='text'
            placeholder='Enter Username'
            className='rounded-[50px] py-1 px-2 text-center text-black text-sm m-2'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
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

          <button className='bg-gray-700 py-1 px-3 text-sm rounded-md m-2'>
            {
              buttonDisabled ? "No Signup" : "Signup"
            }
          </button>
          <Link href='/frontend/login'>
            <span className='font-extralight text-sm'>Already have an account? <b>Login Here</b> </span>
          </Link>

        </div>

      </main>

    </>
  )
}

export default SignupPage