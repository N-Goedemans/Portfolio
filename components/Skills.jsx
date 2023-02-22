import Image from 'next/image'
import React from 'react'
import htmlLogo from '../public/assets/images/html-logo.png'
import cssLogo from '../public/assets/images/css-logo.png'
import jsLogo from '../public/assets/images/javascript-logo.png'
import nextLogo from '../public/assets/images/nextjs-logo.png'
import tailwindLogo from '../public/assets/images/tailwind-logo.png'
import phpLogo from '../public/assets/images/php-logo.png'
import mysqlLogo from '../public/assets/images/mysql-logo.png'
import gitLogo from '../public/assets/images/git-logo.png'

export const Skills = () => {
  return (
    <>
    <div id='skills'><br/><br/><br/></div>
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest'>Skills</p>

            <h2 className='py-5'>My Skills</h2>
            <p className='w-[80%] py-3'>
                Right now I am focused on the Front-end languages like HTML/CSS, Javascript, Next.js and Tailwind.
                I also have a little bit of knowledge in PHP and MySQL, but not so much. And of course I use Github 
                for my projects so i have some knowlegde in Git.
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={htmlLogo}
                                width="64" 
                                height="64" 
                                alt="/"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={cssLogo}
                                width="64"
                                height="64" 
                                alt="/"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={jsLogo}
                                width="64" 
                                height="64" 
                                alt="/"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={nextLogo}
                                width="64" 
                                height="64" 
                                alt="/"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NEXT.js</h3>
                        </div>
                    </div>
                </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={tailwindLogo}
                                width="64" 
                                height="64" 
                                alt="/"
                                />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 pt-3 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={phpLogo}
                                width="64" 
                                height="64" 
                                alt="/"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PHP</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 pt-3 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={mysqlLogo}
                                width="64" 
                                height="64" 
                                alt="/"
                                />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src={gitLogo}
                                width="64" 
                                height="64" 
                                alt="/"
                                />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
