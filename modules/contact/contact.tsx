'use client'
import { METADATA } from '@/common/layouts/constant/metadata'
import Link from 'next/link'
import React, { useState } from 'react'
import { SiGmail, SiInstagram, SiWhatsapp } from 'react-icons/si'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  let errors = {
    name: '',
    email: '',
    message: '',
  }

  let waMessage = `*Message from website* %0A
Fullname: ${name} %0A
Email Address: ${email} %0A
Message: ${message} %0A`

  function handleSubmit() {
    if (name === '') {
      errors.name = 'Name required *'
    }
    if (email === '') {
      errors.email = 'Email required *'
    }
    if (message === '') {
      errors.message = 'Message required *'
    }

    console.log(errors);




    if (errors.name == '' && errors.email == '' && errors.message == '') {
      window.location.href = `https://wa.me/${METADATA.phoneNumber}?text=${waMessage}`;
    }
  }

  return (
    <div className=' min-h-screen flex flex-col justify-center items-center relative overflow-hidden'>
      <div className='absolute w-96 h-96 rounded-full blur-2xl bg-rose-200 top-0 left-0'></div>
      <div className='hidden md:block absolute w-96 h-96 rounded-full blur-2xl bg-rose-200 bottom-0 right-0'></div>
      <div className='bg-white w-full md:w-fit flex flex-col md:flex-row gap-20 shadow-xl rounded-xl relative pb-7 px-4 md:px-7 pt-14 border'>
        <h1 className='absolute text-6xl font-bold text-center w-full -top-7 left-0'>Contact</h1>
        <div className='flex flex-col gap-4 md:max-w-[500px]'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Full name or company name</label>
            <input type="text" placeholder='example: Indonesia Studio' className='px-2 py-1 rounded-md outline outline-1 outline-neutral-500 focus:outline-rose-200 focus:outline-2' onChange={(e) => setName(e.target.value)} />
            {errors.name != '' && <span>{errors.name}</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Email Address</label>
            <input type="email" placeholder='example@gmail.com' className='px-2 py-1 rounded-md outline outline-1 outline-neutral-500 focus:outline-rose-200 focus:outline-2' onChange={(e) => setEmail(e.target.value)} />
            {errors.email != '' && <span>{errors.email}</span>}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Message</label>
            <textarea placeholder='' className='px-2 py-1 rounded-md outline outline-1 outline-neutral-500 focus:outline-rose-200 focus:outline-2' onChange={(e) => setMessage(e.target.value)}></textarea>
            {errors.message != '' && <span>{errors.message}</span>}
          </div>

          <button onClick={() => handleSubmit()} className='w-full text-center py-1 rounded-md shadow-md hover:opacity-70 bg-rose-200 flex justify-center items-center gap-2 px-2'>
            <SiWhatsapp className='w-5 h-5 text-green-400' />
            <span className='font-medium'>Send Message</span>
          </button>
        </div>
        <div className='flex flex-col gap-2 w-full md:max-w-[500px]'>
          <h2 className='w-full text-center text-xl font-semibold'>Visit My Social Media</h2>

          <div className='flex flex-col h-full gap-4'>
            <Link href={'https://www.instagram.com/dikaendikaa/'} target='_blank' className='py-2 px-4 w-full rounded-md shadow-md flex items-center gap-2 bg-pink-200 font-medium hover:opacity-70 hover:scale-105 duration-200'>
              <SiInstagram className='w-7 h-7 text-purple-600' />
              Instagram
            </Link>
            <Link href={'mailto:isaendika1@gmail.com'} target='_blank' className='py-2 px-4 w-full rounded-md shadow-md flex items-center gap-2 bg-blue-200 font-medium hover:opacity-70 hover:scale-105 duration-200'>
              <SiGmail className='w-7 h-7 text-red-600' />
              isaendika1@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact