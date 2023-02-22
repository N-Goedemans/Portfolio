import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export const About = () => {
  return (
    <>
    <div id='about'><br/></div>
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl uppercase tracking-widest'>About</p>
                <h2 className='py-5'>Who Am I?</h2>
                <p className='text-lg'>
                    My name is <span className='font-bold'>Niek Goedemans</span>, 
                    and I am currently still in college as an 18 year old Front-End Developer
                    at <Link href="https://www.bit-academy.nl/" className='underline' target="_blank">The Bit Acadamy</Link> in 
                    Purmerend, The Netherlands. The past few years I have been busy with learning programming. In my freetime i like to
                    start new projects like this one to show off my skills.
                </p>
                <p className='text-lg'>
                    Besides programming i also like to go to the gym for 6 times per week if possible, and i love playing games
                    with my friends to clear my head and have fun. I am very social and like to meet new people.
                </p>
            </div>
            <div className='h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/../public/assets/images/foto.jpg" alt="/" width="260" height="30"/>
            </div>
        </div>
    </div>
    </>
  )
}
