'use client'
import { Projects } from '@/common/layouts/constant/projets'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards'
import 'swiper/css/free-mode'
import { EffectCards, FreeMode } from 'swiper/modules';

interface ProjectSlugProps {
  slug: string
}

const ProjectSlug = ({ slug }: ProjectSlugProps) => {
  const blog = getBlog(slug)

  return (
    <section className='p-7 md:px-14 py-28 flex flex-col gap gap-7 text-lg relative overflow-hidden'>
      <h1 className='text-4xl md:text-6xl font-bold text-center md:text-start'>{blog?.title}</h1>
      <div className='flex flex-col-reverse md:flex-row justify-between gap-4'>
        <div className='flex flex-col gap-4 w-full md:w-1/2'>
          {blog?.descriptions.map((paragaph: string, index: number) => (
            <p key={index} className='indent-7'>{paragaph}</p>
          ))}
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='w-1/2 md:w-4/5 flex flex-col gap-4'>

            <Swiper
              modules={[EffectCards]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              effect='cards'
              className='w-full'
            >
              {blog?.srcImages.map((src, index) => (
                <SwiperSlide key={index} className='bg-red-400'>
                  <img src={src} srcSet={`${src} 2x`} alt="project image" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='flex md:flex-col justify-between gap-4'>
              <div className='flex flex-col gap-2'>
                <span className='font-medium text-sm'>Tags:</span>
                <div className='flex flex-wrap gap-2'>
                  {blog?.tags && blog.tags.map((tag: any, index: number) => (
                    <div key={index}>
                      <span className='px-4 py-1 bg-slate-100 rounded-sm shadow-md text-base'>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <span className='font-medium text-sm'>Skills:</span>
                <div className='flex flex-wrap gap-2'>
                  {blog?.icons.map((icon: any, index: number) => (
                    <div key={index}>
                      <icon.SvgIcon className='w-7 h-7' />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function getBlog(key: string) {
  return Projects.find((Project: any) => slugify(Project.title) === key);
}

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default ProjectSlug