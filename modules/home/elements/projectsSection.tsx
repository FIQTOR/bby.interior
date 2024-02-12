'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import ProjectSectionCard from './projectSectionCard'

const ProjectSection = () => {

  return (
    <section className='px-7 md:px-14 py-14 flex flex-col gap gap-7'>
      <h2 className='text-4xl font-bold'>My Last Project</h2>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(15px)', y: 50 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ProjectSectionCard />
      </motion.div>

      <div className='w-full flex justify-center py-14'>
        <Link href={'/project'} className='text-center text-blue-400 hover:opacity-70 duration-200'>See all project</Link>
      </div>
    </section>
  )
}

export default ProjectSection