import { Skills } from '@/common/layouts/constant/skills'
import React from 'react'

const SkillSection = () => {

  return (
    <section id='skills' className='px-7 md:px-14 py-14 flex flex-col gap gap-4'>
      <h2 className='text-4xl font-bold'>My Skill</h2>
      <ul className='flex gap-4 flex-wrap'>
        {Skills.map((skill: any, index: number) => (
          <div className='flex flex-col items-center justify-center gap-2'>
            <skill.SvgIcon key={index} className='w-7 h-7' />
            <span>{skill.tooltip}</span>
          </div>
        ))}
      </ul>
    </section>
  )
}

export default SkillSection