import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-screen flex flex-col-reverse md:flex-row justify-between relative overflow-hidden'>
      <div className='w-96 h-96 absolute top-0 -left-20 bg-rose-200 rounded-full blur-3xl z-[-1]'></div>
      <div className='w-96 h-96 absolute bottom-32 -right-20 bg-rose-200 rounded-full blur-3xl z-[-1]'></div>
      <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center pl-7 md:pl-14'>
        <h1 className='text-7xl font-semibold'>BBY INTERIOR</h1>
        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptatem!</p>
        <div className='flex gap-4'>
          <Link href={'/#about'} className='px-4 py-2 bg-rose-200 rounded-md mt-7 hover:opacity-70 duration-200'>Let's Get Started</Link>
          <Link href={'/contact'} className='px-4 py-2 border-2 border-rose-200 rounded-md mt-7 hover:bg-rose-200 duration-200'>Let's Talk With Me</Link>
        </div>
      </div>
      <div className='w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center pt-28 md:pt-0 relative'>
        <img src="/img/projects/p3.webp" alt="" className='absolute w-full -translate-x-7 -translate-y-7 max-w-[400px] rounded-md shadow-xl' />
        <img src="/img/projects/p2.webp" alt="" className='absolute w-full max-w-[400px] rounded-md shadow-xl' />
        <img src="/img/projects/p1.webp" alt="" className='absolute w-full translate-x-7 translate-y-7 max-w-[400px] rounded-md shadow-xl' />
      </div>
    </header>
  )
}

export default Header