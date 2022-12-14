import React from 'react'
import {FcGoogle} from 'react-icons/fc'


const Login = () => {
  return (
    <div className='relative w-screen h-screen'>
      <div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'> 
        <div className= "w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center"> 
        <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md'>
          <FcGoogle />
          Sign in with Google
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login