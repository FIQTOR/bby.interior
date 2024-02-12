import { Projects } from '@/common/layouts/constant/projets'
import React from 'react'

const ProjectSectionCard = () => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-4'>
      {Projects.slice(0, 4).map((project: any, index: number) => (
        <li key={index} className='w-full rounded-xl shadow-xl relative overflow-hidden'>
          <div className='relative w-full overflow-hidden'>
            <img src={project.srcImage} alt="" className='hover:scale-105 duration-200' />
          </div>
          <div className='p-4'>
            <div className='flex justify-between'>
              <h5 className='font-bold text-xl'>{project.title}</h5>
              <a href={`/project/${slugify(project.title)}`} className='text-center text-blue-400 hover:opacity-70 duration-200'>Lihat Selengkapnya</a>
            </div>
            <p>
              {project.shortDescription}
            </p>
            <div className='flex flex-wrap py-4'>
              {(project.tags).map((tag: any, index: number) => (
                <div key={index}>
                  <span className='px-4 py-1 bg-slate-100 rounded-sm shadow-md'>{tag}</span>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap pt-4'>
              {(project.icons).map((icon: any, index: number) => (
                <div key={index}>
                  <icon.SvgIcon className='w-7 h-7' />
                </div>
              ))}
            </div>
          </div>

        </li>
      ))}
    </ul>
  )
}


const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default ProjectSectionCard