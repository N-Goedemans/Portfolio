import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl uppercase'>About</p>
                <h2 className='py-5'>Who Am I?</h2>
                <p className='text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Facere, voluptate. Qui cumque voluptatibus nulla quo nam.
                    Nostrum magni nisi ipsam provident mollitia reprehenderit, 
                    hic amet magnam sunt doloribus sit dicta?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Facere, voluptate. Qui cumque voluptatibus nulla quo nam.
                </p>
                <p className='text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Facere, voluptate. Qui cumque voluptatibus nulla quo nam.
                    Nostrum magni nisi ipsam provident mollitia reprehenderit, 
                    hic amet magnam sunt doloribus sit dicta?
                </p>
            </div>
            <div className='h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/../public/assets/foto.jpg" alt="/" width="260" height="30"/>
            </div>
        </div>
    </div>
  )
}
