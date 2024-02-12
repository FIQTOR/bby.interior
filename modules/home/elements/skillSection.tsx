import { Skills } from '@/common/layouts/constant/skills'
import React from 'react'

const SkillSection = () => {

  return (
    <section id='skills' className='px-14 py-14 flex flex-col gap gap-4'>
      <h2 className='text-4xl font-bold'>My Skill</h2>
      <ul className='flex gap-4'>
        {Skills.map((skill: any, index: number) => (
          <skill.SvgIcon key={index} className='w-7 h-7' />
        ))}
      </ul>
    </section>
  )
}

export default SkillSection