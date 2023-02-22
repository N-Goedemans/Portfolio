import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import contactImage from '../public/assets/images/contact-image.jpg'

export const Contact = () => {
  return (
    <>
    <div id="contact"><br/></div>
    <div className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-1 h-full'>
              <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImage} alt="/" width="440" height="30"/>
              </div>
              <div>
                <h2 className='py-4'>Niek Goedemans</h2>
                <p className='text-lg py-2'>Front-End Developer</p>
                <p>
                  Get in touch with me if you have any questions about me or if you want to work together.
                </p>
              </div>
              <div>
                <p className='uppercase pt-24 flex justify-center'>Connect with me</p>
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
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                    </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-1 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='rounded-xl uppercase text-sm py-2 text-gray-600'>Name</label>
                    <input type="text" className='rounded-lg border-2  border-gray-300 p-2'/>
                  </div>
                  <div className='flex flex-col'>
                    <label className='rounded-xl uppercase text-sm py-2 text-gray-600'>Email</label>
                    <input type="text" className='rounded-lg border-2  border-gray-300 p-2'/>
                  </div>
                  <div className='flex flex-col'>
                    <label className='rounded-xl uppercase text-sm py-2 text-gray-600'>Subject</label>
                    <input type="text" className='rounded-lg border-2  border-gray-300 p-2'/>
                  </div>
                  <div className='flex flex-col'>
                    <label className='rounded-xl uppercase text-sm py-2 text-gray-600'>Message</label>
                    <textarea name="" id="" cols="30" rows="10" className='rounded-lg border-2 border-gray-300 p-2'></textarea>
                  </div>
                  <button className='uppercase p-4'>
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
