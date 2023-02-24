import Link from 'next/link'
import React from 'react'

export const MessageSuccess = () => {
  return (
    <div className='h-screen text-center text-white'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div className='bg-black p-24 rounded-xl shadow-2xl shadow-gray-800'>
            <h1 className='uppercase'>Your message has been sent successfully</h1>
            <h1 className='text-lg py-8 text-white'>Thank you for your message, i will get in contact with you as soon as i can!</h1>
            <Link href="https://niekgoedemans.netlify.app/">
              <button className='uppercase w-[15%] p-4 hover:scale-110 duration-300 bg-gradient-to-tr from-[#f7b733] to-[#fc4a1a] text-white font-bold rounded-full'>
                Back to home
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}
