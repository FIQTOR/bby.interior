import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full px-14 pt-14 bg-rose-200 relative mt-28'>
      <div className='absolute w-full overflow-hidden -top-40 left-0'>
        <svg className='w-[2000px]' viewBox="0 0 960 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 60L22.8 56.8C45.7 53.7 91.3 47.3 137 46.2C182.7 45 228.3 49 274 54.7C319.7 60.3 365.3 67.7 411.2 70.8C457 74 503 73 548.8 70C594.7 67 640.3 62 686 58C731.7 54 777.3 51 823 48.5C868.7 46 914.3 44 937.2 43L960 42L960 101L937.2 101C914.3 101 868.7 101 823 101C777.3 101 731.7 101 686 101C640.3 101 594.7 101 548.8 101C503 101 457 101 411.2 101C365.3 101 319.7 101 274 101C228.3 101 182.7 101 137 101C91.3 101 45.7 101 22.8 101L0 101Z" fill="#fecdd3" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
      </div>
      <div className='flex flex-col-reverse md:flex-row justify-between gap-7'>
        <div className='flex flex-col gap-4'>
          <h6 className='font-bold text-4xl'>Navigation</h6>
          <ul>
            <li className='hover:opacity-70 duration-200'>
              <a href="#">Homepage</a>
            </li>
            <li className='hover:opacity-70 duration-200'>
              <a href="#">About</a>
            </li>
            <li className='hover:opacity-70 duration-200'>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h6 className='font-bold text-4xl'>Social Media</h6>
          <ul>
            <li className='hover:opacity-70 duration-200'>
              <a href="#">Instagram</a>
            </li>
            <li className='hover:opacity-70 duration-200'>
              <a href="mailto:isaendika1@gmail.com">isaendika1@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <img src="/img/icon.webp" alt="icon.webp" className='w-20 h-20' />
          <p>Living solution</p>
        </div>
      </div>
      <p className='w-full text-center font-medium py-7'>Copyright © 2024 bby.interior | All Rights Reserved.</p>
    </footer >
  )
}

export default Footer