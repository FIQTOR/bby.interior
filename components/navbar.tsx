'use client'
import { METADATA } from '@/common/layouts/constant/metadata';
import Link from 'next/link'
import React, { useState } from 'react'
import { TbMenu2, TbX } from 'react-icons/tb'

export default function Navbar() {
  const [navShow, setNavShow] = useState(false);

  function handleNav(value: boolean) {
    setNavShow(value);
  }
  return (
    <nav className='fixed top-0 left-0 w-full h-14 backdrop-blur-2xl
    z-10 bg-rose-200 bg-opacity-50'>
      <button onClick={() => handleNav(true)}
        className='absolute p-2 rounded-full hover:bg-black
      hover:bg-opacity-50 top-2 left-4 md:hidden'>
        <TbMenu2 className='w-7 h-7 text-white' />
      </button>
      <div className='flex gap-2 items-center
    absolute left-16 flex-row top-2'>

        <img src="/img/icon.webp" alt="icon.webp" width='100%' height='100%'
          className='aspect-square w-fit h-10 rounded-full' />
        <span className='md:w-1/2 text-md font-semibold capitalize'>BBY INTERIOR</span>
        <hr />
      </div>

      {navShow ? <div onClick={() => handleNav(false)} className='absolute top-0 left-0 w-screen h-screen bg-black opacity-30 md:hidden block'></div> : ''}
      <ul className={`fixed w-80 max-w-screen bg-rose-200 h-screen py-14
      top-0 flex flex-col gap-2 shadow-2xl md:bg-transparent
      md:flex-row md:relative md:max-w-full md:gap-7 md:justify-center
      md:items-center md:left-0 md:w-full duration-200 md:h-full md:py-0
      ${navShow ? 'left-0' : '-left-full'}`}>
        <button onClick={() => handleNav(false)}
          className='md:hidden'>
          <TbX className='absolute w-7 h-7 left-4 top-4 text-white' />
        </button>
        <div className='px-4 flex flex-col gap-2 items-center
    md:hidden'>
          <img src="/img/icon.webp" alt="icon.webp" width='100%' height='100%'
            className='w-1/2 aspect-square md:w-fit md:h-10' />
          <span className='text-white font-semibold text-2xl
      md:w-1/2 md:text-sm'>
            BBY INTERIOR</span>
          <hr />
        </div>
        {NavLink('Homepage', handleNav, '/#')}
        {NavLink('About', handleNav, '/#about')}
        {NavLink('Skill', handleNav, '/#skills')}
        {NavLink('Projects', handleNav, '/project')}
        <li className='md:absolute right-14 top-2 flex px-7 md:px-0'>
          <Link href="/contact" className='bg-rose-300 md:bg-rose-200 rounded-lg hover:opacity-70 duration-300 shadow-md w-full py-2 px-4'>Let's Talk</Link>
        </li>
      </ul>
    </nav>
  )
}

const NavLink = (label: string, handle: any, url: string) => (
  <li className='flex px-7 md:px-0'>
    <Link href={url} className='bg-rose-300 hover:opacity-70 text-black w-full
    px-4 py-2 rounded-md hover:scale-105 duration-200
    md:bg-transparent md:p-0'
      onClick={() => handle(false)}>
      {label}
    </Link>
  </li>
)