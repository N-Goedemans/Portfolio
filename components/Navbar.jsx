import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const Navbar = () => {
  const [nav, setNav] = React.useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-white'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Image src="/../public/assets/logo.png" alt="/" width="80" height="30"/>
      <ul className='hidden md:flex'>
        <Link href='/'>
          <li className='ml-10 text-sm uppercase hover:border-b color-black'>Home</li>
        </Link>
        <Link href='/'>
          <li className='ml-10 text-sm uppercase hover:border-b color-black'>About</li>
        </Link>
        <Link href='/'>
          <li className='ml-10 text-sm uppercase hover:border-b color-black'>Skills</li>
        </Link>
        <Link href='/'>
          <li className='ml-10 text-sm uppercase hover:border-b color-black'>Contact</li>
        </Link>
      </ul>
      <div onClick={handleNav} className='md:hidden cursor-pointer'>
        <AiOutlineMenu size={25}/>
      </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen ease-in duration-500 bg-black/60' : ''}>
        <div 
          className={
            nav 
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            }>
          <div>
            <div className='pl-0 flex w-full items-center justify-between'>
              <Image src="/../public/assets/logo.png" width="70" height="30" alt="/"/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-8 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
              <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
              <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
              <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
              <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
          </div>
          <div className='pt-40'>
            <p className='uppercase tacking-widest text-[#4540e5]'>Let's connect</p>
            <div className='flex items-center justify-between my-4 pt-3 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedinIn/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaGithub/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail/>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <BsFillPersonLinesFill/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
