import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Main = () => {
  return (
    <>
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-4 text-gray-700'>Hi, I'm Niek</h1>
                    <h1 className='py-4 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='py-6 text-gray-600 max-w-[70%] m-auto'> 
                    I'm a front-end web developer student at The Bit Academy and love to learn new things where I am interested in. 
                    Currently I'm focusing on building responsive front-end web applications, but I'm open to learn some back-end technologies.
                    
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href="https://www.linkedin.com/in/niek-goedemans-a0235a253/" target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn  />
                            </div>
                        </Link>
                        <Link href="https://github.com/N-Goedemans" target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                        </Link>
                        <Link href="mailto:niekgoedemans93@gmail.com">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
