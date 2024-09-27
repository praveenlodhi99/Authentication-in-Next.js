"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter(); // Initialize router here

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Signup button Settings
  const [buttonDisabled, setButtonDisabled] = useState(true); // Start with the button disabled
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/sign-up', user);
      console.log("Sign-up successful", response.data);
      toast.success("Sign-up successful!");
      router.push('/frontend/login'); // Redirect to login page after success
    } catch (error: any) {
      console.log('Sign-up error: ', error.message);
      toast.error(error.message || 'An error occurred during sign-up.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Update button state based on user input
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <main className='justify-center items-center text-center flex flex-col p-3'>

        <div className='text-2xl text-white items-center'>
          <h1>{loading ? "Processing" : "Sign-up"}</h1>
        </div>

        {/* Sign-Up Form */}
        <div className='justify-center items-center border-4 border-slate-100 border-double rounded-xl flex flex-col w-2/7 mt-5 p-5 font-light'>

          {/* Username Label */}
          <input
            id='username'
            type='text'
            placeholder='Enter Username'
            className='rounded-[50px] py-1 px-2 text-center text-black text-sm m-2 w-full'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          {/* E-Mail Label */}
          <input
            id='email'
            type='email'
            placeholder='Enter E-Mail ID'
            className='rounded-[50px] py-1 px-2 text-center text-black text-sm m-2 w-full'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          {/* Password Label */}
          <div className="relative w-full right-2">
            {/* Password Input */}
            <input
              id='password'
              type={showPassword ? 'text' : 'password'} // Toggle input type
              placeholder='Enter Password'
              className='rounded-[50px] py-1 px-2 text-center text-black text-sm m-2 w-full'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            {/* Toggle Show/Hide Password Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              className={`absolute right-0 transition-colors duration-300 top-1/2 transform -translate-y-1/2 font-semibold text-gray-500 hover:text-black ${showPassword ? 'line-through text-[10px]' : 'text-[10px]'}`}
            >
              {showPassword ? 'Hide' : 'View'}
            </button>
          </div>

          {/* Sign-up Button Setting */}
          <button
            onClick={onSignup} // Add onClick event to trigger signup
            className={`py-1 px-3 text-sm rounded-md transition-all m-3 ${buttonDisabled ? 'bg-red-500' : 'bg-green-500 hover:scale-110 '}`}
            disabled={buttonDisabled} // optionally disable the button too, means it cannot be clicked
          >
            {buttonDisabled ? 'No Signup' : 'Sign-up'}
          </button>

          <Link href='/frontend/login'>
            <span className='font-extralight text-sm'>
              Already have an account?
              <b className="font-medium underline hover:text-green-400 transition-colors duration-300 line-clamp-3">Login Here</b>
            </span>
          </Link>

        </div>
      </main>
    </>
  );
}

export default SignupPage