import { Projects } from '@/common/layouts/constant/projets'
import React from 'react'

const ProjectCard = () => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-4'>
      {Projects.slice(0, 4).map((project: any, index: number) => (
        <li key={index} className='w-full rounded-xl shadow-xl relative overflow-hidden'>
          <div className='relative w-full overflow-hidden'>
            <img src={project.srcImage} alt="" className='hover:scale-105 duration-200' />
          </div>
          <div className='p-4'>
            <h5 className='font-bold text-xl'>{project.title}</h5>
            <p>
              {project.description}
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

export default ProjectCard